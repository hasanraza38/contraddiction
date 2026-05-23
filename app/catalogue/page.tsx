import { fetchGraphQL } from "@/lib/fetchGraphQL";
import { GET_CATALOGUE_ITEMS, GET_CATALOGUE_CATEGORIES } from "@/graphql/queries";
import { transformCatalogue } from "@/lib/graphql-types";
import CatalogueClient from "@/components/catalogue/CatalogueClient";
import { Suspense } from "react";

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

  return (
    <Suspense fallback={<div className="w-full h-screen flex items-center justify-center bg-white"><div className="w-8 h-8 border-t-2 border-[#950002] rounded-full animate-spin"></div></div>}>
      <CatalogueClient products={products} fetchedCategories={fetchedCategories} />
    </Suspense>
  );
}
