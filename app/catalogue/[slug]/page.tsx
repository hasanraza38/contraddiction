import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { fetchGraphQL } from "@/lib/fetchGraphQL";
import { GET_CATALOGUE_BY_SLUG, GET_RELATED_PRODUCTS } from "@/graphql/queries";
import { transformCatalogue, CatalogueNode } from "@/lib/graphql-types";
import ProductDetailClient from "@/components/catalogue/ProductDetailClient";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const dataResponse = await fetchGraphQL(GET_CATALOGUE_BY_SLUG, { slug: resolvedParams.slug }).catch(() => null);
  const data = dataResponse?.data;

  if (!data?.catalogue) {
    return {
      title: "Product Not Found",
    };
  }

  const product = transformCatalogue(data.catalogue);

  return {
    title: product.name,
    description: product.argument,
    openGraph: {
      title: product.name,
      description: product.argument,
      images: [
        {
          url: product.image,
          alt: product.name,
        },
      ],
      url: `https://contradictions.pk/catalogue/${product.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: product.name,
      description: product.argument,
      images: [product.image],
    },
  };
}

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


    

    

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "image": product.image,
    "description": product.argument,
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStoreOnly",
      "price": "0",
      "priceCurrency": "PKR",
      "description": "Premium luxury furniture piece available in our collection."
    },
    "material": product.material,
    "productionDate": new Date().getFullYear().toString()
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProductDetailClient product={product} relatedProducts={relatedProducts} />
    </>
  );
}

