const express = require('express');
const app = express();
require('dotenv').config();

app.use(express.json());

const routes = require('./routes');
app.use(routes);

const protocol = process.env.PROTOCOL || "http";
const ip = require('ip').address();
const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`> localhost:${port} or ${protocol}://${ip}:${port}`);
})
