export interface CatalogueCategory {
  name: string;
  slug: string;
}

export interface CatalogueDetails {
  material: string;
  year: string;
  craftNote: string;
  argument: string;
  origin: string;
  treatment: string;
  photoGallery: {
    fullFileUrl: string;
  }[] | null;
}

export interface CatalogueNode {
  id: string;
  title: string;
  slug: string;
  featuredImage: {
    node: {
      sourceUrl: string;
    };
  } | null;
  catalogueCategories: {
    nodes: CatalogueCategory[];
  };
  catalogueDetails: CatalogueDetails;
}

// Normalized product to match the frontend expectations originally derived from data.ts
export interface NormalizedCatalogue {
  id: string;
  name: string;
  slug: string;
  image: string;
  category: string;
  material: string;
  year: string;
  craftNote: string;
  argument: string;
  origin: string;
  treatment: string;
  photoGallery: { url: string }[];
}

export const transformCatalogue = (node: CatalogueNode): NormalizedCatalogue => {
  return {
    id: node.id,
    name: node.title,
    slug: node.slug,
    image: node.featuredImage?.node?.sourceUrl || "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=800&auto=format&fit=crop",
    category: node.catalogueCategories?.nodes?.[0]?.name || "Uncategorized",
    material: node.catalogueDetails?.material || "",
    year: node.catalogueDetails?.year || "",
    craftNote: node.catalogueDetails?.craftNote || "",
    argument: node.catalogueDetails?.argument || "",
    origin: node.catalogueDetails?.origin || "",
    treatment: node.catalogueDetails?.treatment || "",
    photoGallery: node.catalogueDetails?.photoGallery?.map(p => ({ url: p.fullFileUrl })) || []
  };
};
