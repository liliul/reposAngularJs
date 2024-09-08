import express, {response} from 'express'

const port = 3000

const app = express()

app.get('/', (request, response) => {
    response.json({message: 'OK'})
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`)
})
