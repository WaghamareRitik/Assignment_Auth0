export const typeDefs = `#graphql

type User {
  id: ID!
  name: String
  email: String
}

type Query {
  publicMessage: String
  privateMessage: String
  me: User
}

`;
