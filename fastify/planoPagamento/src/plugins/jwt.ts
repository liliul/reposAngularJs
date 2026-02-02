import jwt from '@fastify/jwt'
import fp from 'fastify-plugin'

export default fp(async (app) => {
  app.register(jwt, {
    secret: process.env.JWT_SECRET!,
  })
})
