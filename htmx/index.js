const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/ini',(res, req) => {
	res.send('Testando htmx')
})

app.listen(8080, () => {
	console.log('port: 8080')
})