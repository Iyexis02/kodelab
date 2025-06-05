import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: process.env.GRAPH_QL_URL,
  cache: new InMemoryCache(),
  headers: {
    Authorization: process.env.GRAPH_QL_TOKEN as string,
  },
});

export default client;
