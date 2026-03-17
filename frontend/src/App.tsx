import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

export default function App() {
  const {
    isAuthenticated,
    isLoading,
    getAccessTokenSilently,
    user,
    logout,
    loginWithRedirect,
  } = useAuth0();

  useEffect(() => {
    const setToken = async () => {
      if (isAuthenticated) {
        try {
          const token = await getAccessTokenSilently();

          console.log("Access Token:", token);

          // ✅ STORE TOKEN HERE
          localStorage.setItem("access_token", token);
        } catch (err) {
          console.error("Token error:", err);
        }
      }
    };

    setToken();
  }, [isAuthenticated]);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Auth0 + GraphQL</h1>

      {!isAuthenticated && (
        <button onClick={() => loginWithRedirect()}>Login</button>
      )}

      {isAuthenticated && (
        <>
          <p>{user?.email}</p>

          <button
            onClick={() => {
              localStorage.removeItem("access_token"); // cleanup
              logout({ logoutParams: { returnTo: window.location.origin } });
            }}
          >
            Logout
          </button>
        </>
      )}
    </div>
  );
}
