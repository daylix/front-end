import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: 'https://strapi.daylix.pro/graphql',
  cache: new InMemoryCache(),
});

export default client;
