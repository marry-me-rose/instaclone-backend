require("dotenv").config();
import { ApolloServer } from "apollo-server";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import schema from "./schema";

const server = new ApolloServer({
  schema,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground({})],
});

const PORT = process.env.PORT;

server
  .listen(PORT)
  .then(() => console.log("🧀 Server is running on http://localhost:${PORT}/"));
