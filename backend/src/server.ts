import http from "http";
import dotenv from "dotenv";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";

import app from "./app";
import { typeDefs } from "./graphql/schema";
import { resolvers } from "./graphql/resolvers";
import { buildContext } from "./graphql/context";

dotenv.config();

async function startServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();

  app.use(
    "/graphql",
    expressMiddleware(server, {
      context: buildContext,
    }),
  );

  const httpServer = http.createServer(app);

  httpServer.listen(process.env.PORT, () => {
    console.log(
      `Server running at http://localhost:${process.env.PORT}/graphql`,
    );
  });
}

startServer();
