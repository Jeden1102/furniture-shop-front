"use client"

import { ApolloProvider as Provider } from "@apollo/client"
import { createApolloClient } from "../lib/apolloClient"

const client = createApolloClient()

export function ApolloProvider({ children }: { children: React.ReactNode }) {
  return <Provider client={client}>{children}</Provider>
}
