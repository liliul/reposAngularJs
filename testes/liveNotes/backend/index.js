/**
 * link https://www.youtube.com/watch?v=ixKkaWClWBE
 * 
 * */

const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html')
})

app.get('/note/:id', (req, res) => {
	res.sendFile(__dirname + '/public/note.html')
})

const porta = 3000;
app.listen(porta, () => {
	console.log(`servidor rodando na porta ${porta}`)
})