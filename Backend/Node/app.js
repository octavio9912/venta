require('dotenv').config()
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

const signin = require('./api/routes/register');
app.use('/signin', signin);

const offers = require('./api/routes/offers');
app.use('/offers', offers);

const contact = require('./api/routes/contact')
app.use('/contact', contact);

module.exports = app;