const express = require('express')
const router = express.Router();

router.get('/', function(request, response, next) {
    res.render('index', {title: 'express'})
});


module.exports = router