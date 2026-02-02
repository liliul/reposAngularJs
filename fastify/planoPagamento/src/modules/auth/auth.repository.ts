import { db } from '../../shared/utils/db'

class AuthRepository {
  async findUserByEmail(email: string) {
    const { rows } = await db.query('SELECT * FROM users WHERE email = $1', [email])
    return rows[0]
  }

  async saveRefreshToken(userId: string, token: string) {
    await db.query(
      `INSERT INTO refresh_tokens (id, user_id, token, expires_at)
       VALUES ($1, $2, $3, now() + interval '7 days')`,
      [crypto.randomUUID(), userId, token]
    )
  }

  async findValidRefreshToken(token: string) {
    const { rows } = await db.query(
      `SELECT * FROM refresh_tokens
       WHERE token = $1 AND revoked = false AND expires_at > now()`,
      [token]
    )
    return rows[0]
  }

  async revokeRefreshToken(id: string) {
    await db.query('UPDATE refresh_tokens SET revoked = true WHERE id = $1', [id])
  }

  async revokeByToken(token: string) {
    await db.query('UPDATE refresh_tokens SET revoked = true WHERE token = $1', [token])
  }
}

export const authRepository = new AuthRepository()
