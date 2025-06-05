'use client';

import client from './apollo';
import { ApolloProvider } from '@apollo/client';

export default function ApolloWrapper({ children }: { children: React.ReactNode }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
