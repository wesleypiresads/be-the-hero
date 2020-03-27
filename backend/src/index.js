// Index da aplicação
const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

// Para iniciar o servidor na porta 3333; é só digitar (node index.js)
app.listen(3333)