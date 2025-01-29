const express = require('express');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = 8081;

app.use(express.json());
app.use('/api', userRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});