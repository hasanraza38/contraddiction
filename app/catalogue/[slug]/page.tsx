import { notFound } from "next/navigation";
import { fetchGraphQL } from "@/lib/fetchGraphQL";
import { GET_CATALOGUE_BY_SLUG, GET_RELATED_PRODUCTS } from "@/graphql/queries";
import { transformCatalogue, CatalogueNode } from "@/lib/graphql-types";
import ProductDetailClient from "@/components/catalogue/ProductDetailClient";

export const revalidate = 1800; // 30 minutes

export default async function ProductDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  
  const [dataResponse, relatedResponse] = await Promise.all([
    fetchGraphQL(GET_CATALOGUE_BY_SLUG, { slug: resolvedParams.slug }).catch(() => null),
    fetchGraphQL(GET_RELATED_PRODUCTS, { slug: resolvedParams.slug, first: 5 }).catch(() => null),
  ]);

  const data = dataResponse?.data;

  if (!data?.catalogue) {
    notFound();
  }
  
  

  const product = transformCatalogue(data.catalogue);

  // Extract all related products from collections, unique by id, excluding current product, limited to 3.
  const relatedNodes: any[] = [];
  const seenIds = new Set<string>();

  if (relatedResponse?.data?.catalogue?.catalogueCollections?.nodes) {
    for (const collection of relatedResponse.data.catalogue.catalogueCollections.nodes) {
      if (collection?.catalogues?.nodes) {
        for (const item of collection.catalogues.nodes) {
          if (item && !seenIds.has(item.id)) {
            seenIds.add(item.id);
            relatedNodes.push(item);
          }
        }
      }
    }
  }

  const relatedProducts = relatedNodes
    .map((node) => transformCatalogue(node as CatalogueNode))
    .filter((p: any) => p.id !== product.id)
    .slice(0, 3);


    

    

  return <ProductDetailClient product={product} relatedProducts={relatedProducts} />;
}

