import { gql } from "@apollo/client";

export const GET_PUBLIC = gql`
  query {
    publicMessage
  }
`;

export const GET_PRIVATE = gql`
  query {
    privateMessage
  }
`;

export const GET_ME = gql`
  query {
    me {
      id
      name
      email
    }
  }
`;
