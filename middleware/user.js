var con = require('../connection')
var mysql = require('mysql')
var md5 = require('md5')
const { nanoid } = require('nanoid')

exports.regist = function (req, res) {
    var id = nanoid(16)
    var post = {
        username: req.body.username,
        email: req.body.email,
        password: md5(req.body.password)
    }

    var query = 'select email from ?? where ?? = ?'
    var table = ['user', 'email', post.email]

    query = mysql.format(query, table)

    con.query(query, function (error, rows) {
        if (error) {
            res.status(500).json({
                success: false,
                error: error
            })
        } else {
            if (rows.length == 0) {
                var data = {
                    id_user: 'user-'+id,
                    username: post.username,
                    email: post.email,
                    password: post.password
                }
                var query = 'insert into ?? set ?'
                var table = ['user']
                query = mysql.format(query, table)
                con.query(query, data, function (error, rows) {
                    if (error) {
                        res.status(500).json({
                            success: false,
                            error: error
                        })
                    } else {
                        res.status(200).json({
                            success: true,
                            message: 'Registration succeed',
                            data:({
                                id_user: 'user-'+id,
                                username: post.username,
                                email: post.email,
                                password: post.password,
                            })
                        });
                    }
                })
            } else {
                res.status(400).json({
                    success: false,
                    message: 'Email has been registered. Registration failed'
                });
            }
        }
    })
}

exports.login = function (req, res){
    var post = {
        email: req.body.email,
        password: req.body.password
    } 
    
    var query = "select * from ?? where ?? = ? and ?? = ?"
    var table = ['user', 'email', post.email, 'password', md5(post.password)]

    query = mysql.format(query, table)
    con.query(query, function(error, rows){
        if(error){
            res.status(500).json({
                success: false,
                error: error
            }) 
        }else{
            if(rows.length == 1){
                id_user = rows[0].id_user
                username= rows[0].username

                var data = {
                    id_user: id_user,
                    username: username, 
                }
                res.status(200).json({
                    success: true,
                    userId: data.id_user,
                    userName: data.username,
                    message: 'Login success',
                })
            }else{
                res.status(404).json({
                success: false,
                message: 'Wrong e-mail or password!'
                })   
            } 
        }
    }) 
} 