import { randomUUID } from 'crypto'
import type { FastifyInstance } from 'fastify'

export class AuthRepository {
  constructor(private app: FastifyInstance) {}

  async findUserByEmail(email: string) {
    const { rows } = await this.app.pg.query('SELECT * FROM users WHERE email = $1', [email])
    return rows[0]
  }

  async saveRefreshToken(userId: string, token: string) {
    await this.app.pg.query(
      `INSERT INTO refresh_tokens (id, user_id, token, revoked, expires_at)
       VALUES ($1, $2, $3, false, now() + interval '7 days')`,
      [randomUUID(), userId, token]
    )
  }

  async findValidRefreshToken(token: string) {
    const { rows } = await this.app.pg.query(
      `SELECT *
       FROM refresh_tokens
       WHERE token = $1
         AND revoked = false
         AND expires_at > now()`,
      [token]
    )
    return rows[0]
  }

  async revokeRefreshToken(id: string) {
    await this.app.pg.query('UPDATE refresh_tokens SET revoked = true WHERE id = $1', [id])
  }

  async revokeByToken(token: string) {
    await this.app.pg.query('UPDATE refresh_tokens SET revoked = true WHERE token = $1', [token])
  }
}
