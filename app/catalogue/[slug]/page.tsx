import { notFound } from "next/navigation";
import { fetchGraphQL } from "@/lib/fetchGraphQL";
import { GET_CATALOGUE_BY_SLUG, GET_CATALOGUE_ITEMS_LIMITED } from "@/graphql/queries";
import { transformCatalogue, CatalogueNode } from "@/lib/graphql-types";
import ProductDetailClient from "@/components/catalogue/ProductDetailClient";

export const revalidate = 1800; // 30 minutes

export default async function ProductDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  
  const [dataResponse, relatedResponse] = await Promise.all([
    fetchGraphQL(GET_CATALOGUE_BY_SLUG, { slug: resolvedParams.slug }).catch(() => null),
    fetchGraphQL(GET_CATALOGUE_ITEMS_LIMITED, { first: 4 }).catch(() => null),
  ]);

  const data = dataResponse?.data;
  const relatedData = relatedResponse?.data;

  if (!data?.catalogue) {
    notFound();
  }

  const product = transformCatalogue(data.catalogue);
  const relatedProducts = relatedData 
    ? relatedData.catalogues.nodes.map(transformCatalogue).filter((p: any) => p.id !== product.id).slice(0, 3)
    : [];

  return <ProductDetailClient product={product} relatedProducts={relatedProducts} />;
}

