const express = require('express')
const router = express.Router();

router.get('/', function(request, response, next) {
    res.send('responds')
});


module.exports = router