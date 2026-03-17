import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { env } from "../env";

const httpLink = createHttpLink({
  uri: env.apiUrl,
});

const authLink = setContext(async (_, { headers }) => {
  const token = localStorage.getItem("access_token");

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

export const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
