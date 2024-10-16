const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// Configuração da conexão com o MySQL
const db = mysql.createConnection({
    host: '172.17.0.2',
    user: 'root',
    password: 'root',
    database: 'todolist'
});

db.connect(err => {
    if (err) throw err;
    console.log('Conectado ao banco de dados MySQL!');
});

// Rota para obter todas as tarefas
app.get('/tasks', (req, res) => {
    db.query('SELECT * FROM tasks', (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
});

// Rota para adicionar uma nova tarefa
app.post('/tasks', (req, res) => {
    const { title } = req.body;
    db.query('INSERT INTO tasks (title) VALUES (?)', [title], (err, results) => {
        if (err) return res.status(500).send(err);
        res.status(201).json({ id: results.insertId, title, completed: false });
    });
});

// Rota para atualizar uma tarefa
app.put('/tasks/:id', (req, res) => {
    const { id } = req.params;
    const { title, completed } = req.body;
    db.query('UPDATE tasks SET title = ?, completed = ? WHERE id = ?', [title, completed, id], (err) => {
        if (err) return res.status(500).send(err);
        res.sendStatus(204);
    });
});

// Rota para deletar uma tarefa
app.delete('/tasks/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM tasks WHERE id = ?', [id], (err) => {
        if (err) return res.status(500).send(err);
        res.sendStatus(204);
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
