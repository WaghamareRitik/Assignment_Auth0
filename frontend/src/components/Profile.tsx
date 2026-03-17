import { useAuth0 } from "@auth0/auth0-react";

export function Profile() {
  const { user, isAuthenticated } = useAuth0();

  if (!isAuthenticated) return null;

  return (
    <div>
      <h3>User Profile</h3>
      <p>{user?.name}</p>
      <p>{user?.email}</p>
    </div>
  );
}
