const express = require('express');
const app = express();

app.use(express.static('public'));

app.post('/ini', (req, res) => {
	res.send('<button style="color:purple;">Naruto</button>')
})
app.get('/info', (req, res) => {
	res.send('menssagem de Sasuke')
})

// novos testes
app.post('/store', (req, res) => {
	res.send(`
		<form hx-post="/store">
		    <input id="title" name="title" type="text"
		        hx-post="/validate"
		        hx-trigger="change"
		        hx-sync="closest form:abort"
		    >
		    <button hx-get="sucessStore" hx-swap="outerHTML">Submit</button>
		</form>
	`)
})
app.get('/sucessStore', (req, res) => {
	res.send(`
		<section hx-target="this" hx-swap="outerHTML">
			<h1>'Sucesso on Submit en Store'</h1>
		</section>
	`)
})

app.get('/docker', (req, res) => {
	res.send(`
		<h1 style="color:blue;font-size: 1.8rem;">Carrengando Container Docker</h1>
	`)
})
app.listen(8080, () => {
	console.log('port: 8080')
})
