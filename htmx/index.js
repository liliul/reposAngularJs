const express = require('express');
const app = express();

app.use(express.static('public'));

app.post('/ini', (req, res) => {
	res.send('<button style="color:purple;">Naruto</button>')
})
app.get('/info', (req, res) => {
	res.send('menssagem de Sasuke')
})

app.listen(8080, () => {
	console.log('port: 8080')
})