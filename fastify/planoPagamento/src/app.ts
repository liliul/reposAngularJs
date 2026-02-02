import swagger from '@fastify/swagger'
import swaggerUi from '@fastify/swagger-ui'
import Fastify from 'fastify'
import { authRoutes } from './modules/auth/auth.routes'
import jwt from './plugins/jwt'
import postgresPlugin from './plugins/postgres.js'
import { healthPostgres, healthRoutes } from './routes/health.routes.js'

// Arquitetura escolhida (Clean-ish)

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
  await app.register(jwt)

  await app.register(authRoutes, { prefix: '/auth' })

  return app
}
