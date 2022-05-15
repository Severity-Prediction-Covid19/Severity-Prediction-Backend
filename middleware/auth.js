var con = require('../connection')
var mysql = require('mysql')
var md5 = require('md5')
var response = require('../res')

exports.regist = function (req, res) {
    var post = {
        username: req.body.username,
        email: req.body.email,
        password: md5(req.body.password),
        no_telp: req.body.no_telp,
        tanggal_lahir: new Date(),
    }

    var query = 'select email from ?? where ?? = ?'
    var table = ['user', 'email', post.email]

    query = mysql.format(query, table)

    con.query(query, function (error, rows) {
        if (error) {
            console.log(error)
        } else {
            if (rows.length == 0) {
                var query = 'insert into ?? set ?'
                var table = ['user']

                query = mysql.format(query, table)
                con.query(query, post, function (error, rows) {
                    if (error) {
                        console.log(error)
                    } else {
                        response.ok('Registration succeed', res)
                    }
                })
            } else {
                response.ok('Email has been registered', res)
            }
        }
    })
}