var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    const state = "up"
    res.status(200).json({
        message : "Contact API is working fine",
        status:state
    })
//  res.render('index', { title: 'Express' });
});


module.exports = router;