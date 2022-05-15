'use strict'

var response = require('./res')
var con = require('./connection')

exports.index = function (req, res) {
    response.ok("REST API Application works", res)
}