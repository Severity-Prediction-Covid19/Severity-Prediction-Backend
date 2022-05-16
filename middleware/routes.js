const express = require('express')
var login = require('./login')
var router = express.Router()

router.post('/api/v1/register', login.regist)
router.post('/api/v1/login', login.login)

module.exports = router