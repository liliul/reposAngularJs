const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send('backend')
})

const porta = 3000;
app.listen(porta, () => {
	console.log(`servidor rodando na porta ${porta}`)
})