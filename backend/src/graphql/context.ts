import axios from "axios";

export const buildContext = async ({ req }: any) => {
  const authHeader = req.headers.authorization || "";

  if (!authHeader.startsWith("Bearer ")) {
    return { user: null };
  }

  const token = authHeader.replace("Bearer ", "");

  try {
    // Call Auth0 userinfo endpoint
    const response = await axios.get(
      `https://${process.env.AUTH0_DOMAIN}/userinfo`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    return {
      user: response.data,
      token,
    };
  } catch (err) {
    return { user: null };
  }
};
