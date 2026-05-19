import { fetchGraphQL } from "@/lib/fetchGraphQL";
import { GET_CATALOGUE_ITEMS, GET_CATALOGUE_CATEGORIES } from "@/graphql/queries";
import { transformCatalogue } from "@/lib/graphql-types";
import CatalogueClient from "@/components/catalogue/CatalogueClient";

export const revalidate = 1800; // 30 minutes

export default async function Catalogue() {
  const [cataloguesResponse, categoriesResponse] = await Promise.all([
    fetchGraphQL(GET_CATALOGUE_ITEMS),
    fetchGraphQL(GET_CATALOGUE_CATEGORIES)
  ]);
    
  const cataloguesData = cataloguesResponse.data;
  const categoriesData = categoriesResponse.data;

  const products = cataloguesData?.catalogues?.nodes.map(transformCatalogue) || [];
  const fetchedCategories = categoriesData?.catalogueCategories?.nodes.map((c: { name: string }) => c.name) || [];

  return <CatalogueClient products={products} fetchedCategories={fetchedCategories} />;
}
