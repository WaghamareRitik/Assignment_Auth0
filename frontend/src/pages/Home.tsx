import { gql, useQuery } from "@apollo/client/react";

const GET_PRIVATE = gql`
  query {
    privateMessage
    me {
      id
      email
      name
    }
  }
`;

export default function Home() {
  const { data, loading, error } = useQuery(GET_PRIVATE);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Private Data 🔐</h2>

      <p>{data.privateMessage}</p>

      <h3>User Info:</h3>
      <p>Email: {data.me.email}</p>
      <p>Name: {data.me.name}</p>
    </div>
  );
}
