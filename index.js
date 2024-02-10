// index.js
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { typeDefs } from "./schema.js";
import resolvers from "./resolvers.js";

const startServer = async () => {
  const app = express();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  // Start the server before applying middleware
  await server.start();

  // Apply middleware directly during server creation
  server.applyMiddleware({ app });

  app.listen({ port: 4000 }, () => {
    console.log(`GraphQL server is running at http://localhost:4000/graphql`);
  });
};

startServer();
