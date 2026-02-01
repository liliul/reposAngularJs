import Fastify from "fastify";
import swagger from "@fastify/swagger";
import swaggerUi from "@fastify/swagger-ui";
import { healthPostgres, healthRoutes } from "./routes/health.js";
import postgresPlugin from "./plugins/postgres.js";
import dotenv from 'dotenv'
dotenv.config()

const app = Fastify({
  logger: true,
});


await app.register(swagger, {
  openapi: {
    info: {
      title: "Fastify API",
      description: "API usando Fastify + Biome + Swagger",
      version: "1.0.0",
    },
  },
});

await app.register(swaggerUi, {
  routePrefix: "/docs",
});

await app.register(postgresPlugin)
await app.register(healthRoutes);
await app.register(healthPostgres)

await app.listen({ port: 3000 });

console.log("🚀 Server running on http://localhost:3000");
console.log("📚 Swagger em http://localhost:3000/docs");
