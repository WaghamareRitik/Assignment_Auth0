import jwt from "jsonwebtoken";
import jwksClient from "jwks-rsa";
import { authConfig } from "../config/auth0";

const client = jwksClient({
  jwksUri: `https://${authConfig.domain}/.well-known/jwks.json`,
});

function getKey(header: any, callback: any) {
  client.getSigningKey(header.kid, function (err, key) {
    const signingKey = key?.getPublicKey();
    callback(null, signingKey);
  });
}

export const verifyToken = (token: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    jwt.verify(
      token,
      getKey,
      {
        audience: authConfig.audience,
        issuer: authConfig.issuer,
        algorithms: ["RS256"],
      },
      (err, decoded) => {
        if (err) return reject(err);
        resolve(decoded);
      },
    );
  });
};
