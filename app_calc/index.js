const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const calculadoraRoutes = require('./src/routes/calculadoraRoutes');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('src/views'));

app.use('/', calculadoraRoutes);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});