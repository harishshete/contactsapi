var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.status(200).json({
        message : "Contact API is working fine"
    })
//  res.render('index', { title: 'Express' });
});


module.exports = router;