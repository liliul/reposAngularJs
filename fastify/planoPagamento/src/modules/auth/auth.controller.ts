import type { FastifyReply, FastifyRequest } from 'fastify'
import { AuthService } from './auth.service'

export class AuthController {
  constructor(private authService: AuthService) {}

  async login(req: FastifyRequest, reply: FastifyReply) {
    const result = await this.authService.login(req.body as any)
    return reply.send(result)
  }

  async refresh(req: FastifyRequest, reply: FastifyReply) {
    const result = await this.authService.refresh(req.body as any)
    return reply.send(result)
  }

  async logout(req: FastifyRequest, reply: FastifyReply) {
    await this.authService.logout(req.body as any)
    return reply.code(204).send()
  }
}
