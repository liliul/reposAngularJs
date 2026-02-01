import fp from 'fastify-plugin'
import postgres from '@fastify/postgres'

export default fp(async (app) => {
  app.register(postgres, {
    connectionString: process.env.DATABASE_URL,
  })
})
