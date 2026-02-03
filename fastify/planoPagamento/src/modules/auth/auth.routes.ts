import type { FastifyInstance } from 'fastify'
import { AuthController } from './auth.controller.js'
import { AuthRepository } from './auth.repository.js'
import { AuthService } from './auth.service.js'

export async function authRoutes(app: FastifyInstance) {
  const authRepository = new AuthRepository(app)

  const authService = new AuthService(authRepository, app.jwt.sign.bind(app.jwt))

  const authController = new AuthController(authService)

  app.post('/login', authController.login.bind(authController))
  app.post('/refresh', authController.refresh.bind(authController))
  app.post('/logout', authController.logout.bind(authController))
}
