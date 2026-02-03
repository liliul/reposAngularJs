// auth.service.ts
import bcrypt from 'bcrypt'
import { randomUUID } from 'crypto'
import { AuthRepository } from './auth.repository'

type JwtSigner = (payload: any, options?: any) => string

export class AuthService {
  constructor(
    private authRepository: AuthRepository,
    private signJwt: JwtSigner
  ) {}

  async login({ email, password }: any) {
    const user = await this.authRepository.findUserByEmail(email)
    if (!user) {
      throw new Error('Credenciais inválidas')
    }

    const valid = await bcrypt.compare(password, user.password_hash)
    if (!valid) {
      throw new Error('Credenciais inválidas')
    }

    const accessToken = this.signJwt({ role: user.role }, { subject: user.id, expiresIn: '15m' })

    const refreshToken = randomUUID()
    await this.authRepository.saveRefreshToken(user.id, refreshToken)

    return { accessToken, refreshToken }
  }

  async refresh({ refreshToken }: any) {
    const token = await this.authRepository.findValidRefreshToken(refreshToken)
    if (!token) {
      throw new Error('Refresh inválido')
    }

    await this.authRepository.revokeRefreshToken(token.id)

    const newRefreshToken = randomUUID()
    await this.authRepository.saveRefreshToken(token.user_id, newRefreshToken)

    const accessToken = this.signJwt({}, { subject: token.user_id, expiresIn: '15m' })

    return {
      accessToken,
      refreshToken: newRefreshToken,
    }
  }

  async logout({ refreshToken }: any) {
    await this.authRepository.revokeByToken(refreshToken)
  }
}
