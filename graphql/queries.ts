import { gql } from "@apollo/client";

// ── 1. GET ALL ────────────────────────────────────────────────────────────────
export const GET_CATALOGUE_ITEMS = gql`
  query GetCatalogues {
    catalogues(first: 100) {
      nodes {
        id
        title
        slug
        featuredImage {
          node {
            sourceUrl
          }
        }
        catalogueCategories {
          nodes {
            name
            slug
          }
        }
        catalogueDetails {
          material
          argument
          craftNote
          origin
          treatment
          photoGallery {
            fullFileUrl
          }
        }
      }
    }
  }
`;

// ── 2. GET SINGLE BY SLUG ─────────────────────────────────────────────────────
export const GET_CATALOGUE_BY_SLUG = gql`
  query GetCatalogueBySlug($slug: ID!) {
    catalogue(id: $slug, idType: SLUG) {
      id
      title
      slug
      featuredImage {
        node {
          sourceUrl
        }
      }
      catalogueCategories {
        nodes {
          name
          slug
        }
      }
      catalogueDetails {
        material
        craftNote
        argument
        origin
        treatment
        photoGallery {
          fullFileUrl
        }
      }
    }
  }
`;

// ── 3. GET ONLY 3 (latest/featured) ──────────────────────────────────────────
export const GET_CATALOGUE_ITEMS_LIMITED = gql`
  query GetCataloguesLimited($first: Int = 30) {
    catalogues(first: $first, where: { orderby: { field: TITLE, order: ASC } }) {
      nodes {
        id
        title
        slug
        featuredImage {
          node {
            sourceUrl
          }
        }
        catalogueCategories {
          nodes {
            name
            slug
          }
        }
        catalogueDetails {
          material
          argument
          craftNote
          origin
          treatment
          photoGallery {
            fullFileUrl
          }
        }
      }
    }
  }
`;


export const GET_FEATURED_COLLECTION = gql`
  query GetFeaturedCollection {
    catalogueCategories {
      nodes {
        name
        slug
        catalogues(first: 1) {
          nodes {
            id
            title
            slug
            featuredImage {
              node {
                sourceUrl
              }
            }
            catalogueCategories {
              nodes {
                name
                slug
              }
            }
            catalogueDetails {
              material
              argument
              craftNote
              origin
              treatment
              photoGallery {
                fullFileUrl
              }
            }
          }
        }
      }
    }
  }
`;

// ── 4. GET ALL BY CATEGORY SLUG ───────────────────────────────────────────────
export const GET_CATALOGUES_BY_CATEGORY = gql`
  query GetCataloguesByCategory($categorySlug: ID!) {
    catalogueCategory(id: $categorySlug, idType: SLUG) {
      name
      slug
      catalogues(first: 100) {
        nodes {
          id
          title
          slug
          featuredImage {
            node {
              sourceUrl
            }
          }
          catalogueCategories {
            nodes {
              name
              slug
            }
          }
          catalogueDetails {
            material
            argument
            craftNote
            origin
            treatment
            photoGallery {
              fullFileUrl
            }
          }
        }
      }
    }
  }
`;

// ── 5. GET 3 BY CATEGORY SLUG ─────────────────────────────────────────────────
export const GET_THREE_CATALOGUES_BY_CATEGORY = gql`
query GetThreeCataloguesByCategory($categorySlug: ID!, $first: Int = 3) {
    catalogueCategory(id: $categorySlug, idType: SLUG) {
      name
      slug
      catalogues(first: $first) {
        nodes {
          id
          title
          slug
          featuredImage {
            node {
              sourceUrl
            }
          }
          catalogueCategories {
            nodes {
              name
              slug
            }
          }
          catalogueDetails {
            material
            argument
            craftNote
            origin
            treatment
            photoGallery {
              fullFileUrl
            }
          }
        }
      }
    }
  }
`;

// ── 6. GET ALL CATALOGUE CATEGORIES ──────────────────────────────────────────
export const GET_CATALOGUE_CATEGORIES = gql`
  query GetCatalogueCategories {
    catalogueCategories {
      nodes {
        id
        name
        slug
        count
      }
    }
  }
`;






export const GET_JOURNALS = gql`
 query GetJournals {
  journals {
    nodes {
      id
      title
      slug
      date
      journalDetails {
        excerpt
        readTime
        content
      }
    }
  }
}
`;


export const GET_JOURNAL_BY_SLUG = gql`
  query GetJournalBySlug($slug: ID!) {
  journal(id: $slug, idType: SLUG) {
    id
    title
    slug
    date
    journalDetails {
      excerpt
      readTime
      content
    }
  }
}
`;

export const GET_JOURNAL_LIMITED = gql`
query GetJournalsLimited($first: Int = 3) {
  journals(first: $first) {
    nodes {
      id
      title
      slug
      date
      journalDetails {
        excerpt
        readTime
        content
      }
    }
  }
}
`;


export const GET_RELATED_PRODUCTS = gql`
  query GetRelatedProducts($slug: ID!, $first: Int = 5) {
    catalogue(id: $slug, idType: SLUG) {
      catalogueCollections {
        nodes {
          name
          slug
          catalogues(first: $first) {
            nodes {
              id
              title
              slug
              featuredImage {
                node {
                  sourceUrl
                }
              }
              catalogueCategories {
                nodes {
                  name
                  slug
                }
              }
              catalogueDetails {
                craftNote
                argument
                material
                origin
                treatment
              }
            }
          }
        }
      }
    }
  }
`;