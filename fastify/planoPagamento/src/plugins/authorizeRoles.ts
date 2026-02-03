export function authorizeRoles(roles: string[]) {
  return async (request: any, reply: any) => {
    const userRole = request.user.role

    if (!roles.includes(userRole)) {
      return reply.code(403).send({ message: 'Acesso negado' })
    }
  }
}
