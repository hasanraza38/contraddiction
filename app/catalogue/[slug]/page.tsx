import { notFound } from "next/navigation";
import { client } from "@/lib/apolloClient";
import { GET_CATALOGUE_BY_SLUG, GET_CATALOGUE_ITEMS_LIMITED } from "@/graphql/queries";
import { transformCatalogue, CatalogueNode } from "@/lib/graphql-types";
import ProductDetailClient from "@/components/catalogue/ProductDetailClient";

export default async function ProductDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  
  const { data, error } = await client.query<{ catalogue: CatalogueNode }>({
    query: GET_CATALOGUE_BY_SLUG,
    variables: { slug: resolvedParams.slug },
  });

  const { data: relatedData } = await client.query<{ catalogues: { nodes: CatalogueNode[] } }>({
    query: GET_CATALOGUE_ITEMS_LIMITED,
    variables: { first: 4 },
  });

  if (error || !data?.catalogue) {
    notFound();
  }

  const product = transformCatalogue(data.catalogue);
  const relatedProducts = relatedData 
    ? relatedData.catalogues.nodes.map(transformCatalogue).filter(p => p.id !== product.id).slice(0, 3)
    : [];

  return <ProductDetailClient product={product} relatedProducts={relatedProducts} />;
}

