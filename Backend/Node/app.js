const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

//ROUTES
const login = require('./api/routes/login');
app.use('/login', login);

const test = require('./api/routes/test');
app.use('/test', test);

const categories = require('./api/routes/categories');
app.use('/categories', categories);



module.exports = app;