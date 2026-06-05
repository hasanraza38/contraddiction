import type { MetadataRoute } from 'next';
import { fetchGraphQL } from '@/lib/fetchGraphQL';
import { GET_CATALOGUE_ITEMS, GET_JOURNALS } from '@/graphql/queries';
import { transformCatalogue, transformJournal } from '@/lib/graphql-types';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://contradictions.pk';

  // Base static routes
  const routes = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/philosophy`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/inquire`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/catalogue`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/journal`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
  ];

  try {
    const [cataloguesResponse, journalsResponse] = await Promise.all([
      fetchGraphQL(GET_CATALOGUE_ITEMS).catch(() => null),
      fetchGraphQL(GET_JOURNALS).catch(() => null),
    ]);

    if (cataloguesResponse?.data?.catalogues?.nodes) {
      const products = cataloguesResponse.data.catalogues.nodes.map(transformCatalogue);
      products.forEach((product: any) => {
        if (product.slug) {
          routes.push({
            url: `${baseUrl}/catalogue/${product.slug}`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.7,
          });
        }
      });
    }

    if (journalsResponse?.data?.journals?.nodes) {
      const articles = journalsResponse.data.journals.nodes.map(transformJournal);
      articles.forEach((article: any) => {
        if (article.slug) {
          routes.push({
            url: `${baseUrl}/journal/${article.slug}`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.7,
          });
        }
      });
    }
  } catch (error) {
    console.error('Error fetching dynamic routes for sitemap:', error);
  }

  return routes;
}
