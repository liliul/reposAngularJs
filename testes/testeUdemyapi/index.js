const express = require('express')

const app = express()
app.use(express.json())

app.get('/root/:id', (req, res) => {
    const id = req.params.id
    console.log(id);
    
    res.status(200).send({messse: 'sucesso'})
})

app.post('/root/user', (req, res) => {
    const {num, num2} = req.body
    console.log(num, num2);
    
    res.status(200).send({messse: 'sucesso body'})
})

app.listen(8081, () => {
    console.log('porta 8081')
})