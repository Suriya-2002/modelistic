const express = require('express');

const modelRoutes = require('./routes/model');

const app = express();

app.set('views', 'views');
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use('/', modelRoutes);

app.listen(2002, 'localhost');

module.exports = app;
