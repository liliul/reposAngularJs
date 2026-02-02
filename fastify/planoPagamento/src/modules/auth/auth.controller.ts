import type { FastifyReply, FastifyRequest } from 'fastify'
import { authService } from './auth.service'

class AuthController {
  async login(req: FastifyRequest, reply: FastifyReply) {
    const result = await authService.login(req.body as any)
    return reply.send(result)
  }

  async refresh(req: FastifyRequest, reply: FastifyReply) {
    const result = await authService.refresh(req.body as any)
    return reply.send(result)
  }

  async logout(req: FastifyRequest, reply: FastifyReply) {
    await authService.logout(req.body as any)
    return reply.send({ ok: true })
  }
}

export const authController = new AuthController()
