var express = require('express');
var app = express();

const status = require('./status');
const contacts = require('./contactsRoutes');


app.use('/',status);
app.use('/contacts',contacts)

module.exports = app;
