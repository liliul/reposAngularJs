import dotenv from 'dotenv'
import buildApp from './app.js'

dotenv.config()

async function start() {
  const app = await buildApp()

  await app.listen({ port: 3000, host: '0.0.0.0' })

  console.log('🚀 Server running on http://localhost:3000')
  console.log('📚 Swagger em http://localhost:3000/docs')
}

start()
