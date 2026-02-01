import swagger from '@fastify/swagger'
import swaggerUi from '@fastify/swagger-ui'
import Fastify from 'fastify'
import postgresPlugin from './plugins/postgres.js'
import { healthPostgres, healthRoutes } from './routes/health.routes.js'

export default async function buildApp() {
  const app = Fastify({
    logger: true,
  })

  await app.register(swagger, {
    openapi: {
      info: {
        title: 'Fastify API',
        description: 'API usando Fastify + Biome + Swagger',
        version: '1.0.0',
      },
    },
  })

  await app.register(swaggerUi, {
    routePrefix: '/docs',
  })

  await app.register(postgresPlugin)
  await app.register(healthRoutes)
  await app.register(healthPostgres)

  return app
}
