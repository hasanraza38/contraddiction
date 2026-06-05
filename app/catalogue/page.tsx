import type { Metadata } from "next";
import { fetchGraphQL } from "@/lib/fetchGraphQL";
import { GET_CATALOGUE_ITEMS, GET_CATALOGUE_CATEGORIES } from "@/graphql/queries";
import { transformCatalogue } from "@/lib/graphql-types";
import CatalogueClient from "@/components/catalogue/CatalogueClient";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "The Collection",
  description: "Explore our collection of bespoke, ultra-luxury furniture. Form without compromise, material without apology.",
  openGraph: {
    title: "The Collection",
    description: "Explore our collection of bespoke, ultra-luxury furniture. Form without compromise, material without apology.",
    url: "https://contradictions.pk/catalogue",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Collection",
    description: "Explore our collection of bespoke, ultra-luxury furniture. Form without compromise, material without apology.",
  },
};

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

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "The Collection | Contradiction",
    "description": "Explore our collection of bespoke, ultra-luxury furniture pieces.",
    "url": "https://contradictions.pk/catalogue",
    "numberOfItems": products.length,
    "itemListElement": products.map((product: any, idx: number) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "url": `https://contradictions.pk/catalogue/${product.slug}`,
      "name": product.name,
      "description": product.argument,
      "image": product.image
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Suspense fallback={<div className="w-full h-screen flex items-center justify-center bg-white"><div className="w-8 h-8 border-t-2 border-[#950002] rounded-full animate-spin"></div></div>}>
        <CatalogueClient products={products} fetchedCategories={fetchedCategories} />
      </Suspense>
    </>
  );
}
