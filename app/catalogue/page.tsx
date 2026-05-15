import { GET_CATALOGUE_ITEMS, GET_CATALOGUE_CATEGORIES } from "@/graphql/queries";
import { transformCatalogue } from "@/lib/graphql-types";
import CatalogueClient from "@/components/catalogue/CatalogueClient";

export const dynamic = 'force-dynamic'; // Prevent static generation failing build due to Hostinger ECONNRESET

async function fetchGraphQL(query: string) {
  const url = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT || "https://darkgreen-deer-608928.hostingersite.com/graphql";
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query }),
    next: { revalidate: 10 }
  });
  
  if (!response.ok) {
    throw new Error(`GraphQL fetch failed: ${response.status} ${response.statusText}`);
  }
  
  return response.json();
}

export default async function Catalogue() {
  const [cataloguesResponse, categoriesResponse] = await Promise.all([
    fetchGraphQL(GET_CATALOGUE_ITEMS.loc?.source.body || ""),
    fetchGraphQL(GET_CATALOGUE_CATEGORIES.loc?.source.body || "")
  ]);
    
  const cataloguesData = cataloguesResponse.data;
  const categoriesData = categoriesResponse.data;

  const products = cataloguesData?.catalogues?.nodes.map(transformCatalogue) || [];
  const fetchedCategories = categoriesData?.catalogueCategories?.nodes.map((c: { name: string }) => c.name) || [];

  return <CatalogueClient products={products} fetchedCategories={fetchedCategories} />;
}
