import type { FastifyInstance } from 'fastify'
import { authController } from './auth.controller'

export async function authRoutes(app: FastifyInstance) {
  app.post('/login', authController.login)
  app.post('/refresh', authController.refresh)
  app.post('/logout', authController.logout)
}
