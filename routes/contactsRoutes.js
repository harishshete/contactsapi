var express = require('express');
var router = express.Router();
const contacts = require('../controller/contactsController');

router.post('/create/:pass_string', contacts.creaateContact);

module.exports = router;