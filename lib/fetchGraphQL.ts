export async function fetchGraphQL(query: any, variables = {}) {
  const queryString = typeof query === 'string' ? query : query?.loc?.source?.body;
  
  if (!queryString) {
    throw new Error('Invalid query passed to fetchGraphQL');
  }

  const endpoint = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT;
  if (!endpoint) {
    throw new Error('NEXT_PUBLIC_GRAPHQL_ENDPOINT is not defined');
  }

  const res = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query: queryString, variables }),
    next: { revalidate: 1800 }, // 30-minute ISR
  });

  if (!res.ok) {
    throw new Error(`GraphQL fetch failed: ${res.status} ${res.statusText}`);
  }

  return res.json();
}
