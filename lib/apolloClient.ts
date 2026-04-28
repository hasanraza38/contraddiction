import { ApolloClient, InMemoryCache, HttpLink, from } from "@apollo/client";
import { RetryLink } from "@apollo/client/link/retry";

const httpLink = new HttpLink({ uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT });

const retryLink = new RetryLink({
  delay: {
    initial: 1000,
    max: 5000,
    jitter: true
  },
  attempts: {
    max: 10,
    retryIf: (error, _operation) => !!error
  }
});

export const client = new ApolloClient({
  link: from([retryLink, httpLink]),
  cache: new InMemoryCache({
    resultCaching: false,
  }),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'no-cache',
    },
    query: {
      fetchPolicy: 'no-cache',
    },
  }
});