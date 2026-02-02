import bcrypt from 'bcrypt'
import { randomUUID } from 'crypto'
import { appJwt } from '../../shared/utils/jwt'
import { authRepository } from './auth.repository'

class AuthService {
  async login({ email, password }: any) {
    const user = await authRepository.findUserByEmail(email)
    if (!user) throw new Error('Credenciais inválidas')

    const valid = await bcrypt.compare(password, user.password)
    if (!valid) throw new Error('Credenciais inválidas')

    const accessToken = appJwt.sign(user.id)
    const refreshToken = randomUUID()

    await authRepository.saveRefreshToken(user.id, refreshToken)

    return { accessToken, refreshToken }
  }

  async refresh({ refreshToken }: any) {
    const token = await authRepository.findValidRefreshToken(refreshToken)
    if (!token) throw new Error('Refresh inválido')

    await authRepository.revokeRefreshToken(token.id)

    const newRefresh = randomUUID()
    await authRepository.saveRefreshToken(token.user_id, newRefresh)

    return {
      accessToken: appJwt.sign(token.user_id),
      refreshToken: newRefresh,
    }
  }

  async logout({ refreshToken }: any) {
    await authRepository.revokeByToken(refreshToken)
  }
}

export const authService = new AuthService()
