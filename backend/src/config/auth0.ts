import dotenv from "dotenv";

dotenv.config();

export const authConfig = {
  domain: process.env.AUTH0_DOMAIN as string,
  audience: process.env.AUTH0_AUDIENCE as string,
  issuer: process.env.AUTH0_ISSUER as string,
};
