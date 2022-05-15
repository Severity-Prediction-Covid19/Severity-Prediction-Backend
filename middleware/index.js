const express = require('express')
var auth = require('./auth')
var router = express.Router()

router.post('/api/v1/register', auth.regist)

module.exports = router