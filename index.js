const express = require('express');
const app = express();

const { validationResult } = require('express-validator');
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(validationResult);
app.use(express.static('./src/public'));


app.listen(PORT, () => console.log(`Servidor online na porta ${PORT}`));