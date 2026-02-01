import type { FastifyInstance } from 'fastify'

export async function healthRoutes(app: FastifyInstance) {
  app.get(
    '/health',
    {
      schema: {
        tags: ['Health'],
        summary: 'Health check',
        response: {
          200: {
            type: 'object',
            properties: {
              status: { type: 'string' },
            },
          },
        },
      },
    },
    async () => {
      return { status: 'ok' }
    }
  )
}

export async function healthPostgres(app: FastifyInstance) {
  app.get('/health/db', async () => {
    const result = await app.pg.query('SELECT 1 AS alive')
    return { db: 'ok conectado com postgres....', postgres: result.rows[0].alive === 1 }
  })
}
