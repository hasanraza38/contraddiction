import { client } from "@/lib/apolloClient";
import { GET_CATALOGUE_ITEMS } from "@/graphql/queries";
import { transformCatalogue, CatalogueNode } from "@/lib/graphql-types";
import CatalogueClient from "@/components/catalogue/CatalogueClient";

export default async function Catalogue() {
  const { data } = await client.query<{ catalogues: { nodes: CatalogueNode[] } }>({
    query: GET_CATALOGUE_ITEMS,
  });

  const products = data?.catalogues?.nodes.map(transformCatalogue) || [];

  return <CatalogueClient products={products} />;
}
