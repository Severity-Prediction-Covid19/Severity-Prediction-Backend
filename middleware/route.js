const express = require('express')
var login = require('./login')
var router = express.Router()

router.post('/api/v1/register', login.regist)

module.exports = router