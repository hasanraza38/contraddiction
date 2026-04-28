import { gql } from "@apollo/client";

export const GET_ALL_CATEGORIES = gql`
  query GetAllCategories {
    projectCategories { nodes{ name slug description } }
  }
`;

export const GET_PROJECTS_BY_CATEGORY = gql`
query GetProjectsByCategory($slug: ID!) {
  projectCategory(id: $slug, idType: SLUG) {
    name
    slug

    projects {
      nodes {
        id
        title
        slug

        projectFields {
          shortDescription
          mainImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  }
}
`;


export const GET_PROJECTS = gql`
  query GetProjects {
    projects {
      nodes {
        id
        title
        slug
        projectCategories {
          nodes {
            name
            slug
          }
        }
        projectFields {
          shortDescription
          mainImage {
            node{
              sourceUrl
            }
          }
        }
      }
    }
  }
`;

export const GET_TOP_FOUR_PROJECTS = gql`
  query GetProjects {
  projects(first: 4) {
    nodes {
      title
      slug

      projectCategories {
        nodes {
          name
          slug
        }
      }

      projectFields {
        shortDescription
        mainImage {
          node {
            sourceUrl
          }
        }
      }
    }
  }
}
`;

export const GET_SINGLE_PROJECT_BY_SLUG = gql`
  query GetSingleProject($slug: ID!) {
    project(id: $slug, idType: SLUG) {
      title
      slug
      projectCategories {
        nodes {
          name
        }
      }
      projectFields {
        shortDescription
        fullDescription
        location  
        program
        totalArea
        gallery{
            fullFileUrl
        }
        mainImage {
          node {
            sourceUrl
          }
        }
      }
    }
  }
`;