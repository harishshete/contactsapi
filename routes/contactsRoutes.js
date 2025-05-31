var express = require('express');
var router = express.Router();
const contacts = require('../controller/contactsController');

router.post('/create/:pass_string',contacts.creaateContact);
router.get('/getcontacts/:pass_string',contacts.getAllContacts);
router.put('/update/:pass_string',contacts.updateContact)
router.delete('/delete/:pass_string',contacts.deleteContact)

module.exports = router;