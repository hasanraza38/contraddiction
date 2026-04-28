"use client";

import { client } from "./apolloClient";
import { ApolloProvider } from "@apollo/client/react";


export function ApolloProviderWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  );
}
