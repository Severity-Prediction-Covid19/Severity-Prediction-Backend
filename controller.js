'use strict';
const con = require('./connection');
var mysql = require('mysql')
var md5 = require('md5')

exports.index = function (req, res) {
    res.status(200).json({
        success: true,
        message: 'REST API is working'
    })
}

exports.showUserHistory = function (req, res) {
    let id = req.params.id

    con.query('select * from riwayat where id_user = ?', [id], function (error, rows, fields) {
        res.status(200).json({
            success: true,
            message: 'History fetched successfully',
            data: ({
                history: rows
            })
        })
    })
}

exports.getUserProfile = function (req, res) {
    let id = req.params.id

    con.query('select * from user where id_user = ?', [id], function (error, rows) {
        res.status(200).json({
            success: true,
            message: 'Data fetched successfully',
            userProfile: ({
                data: rows
            })
        })
    })
}

exports.deleteUserbyId = function (req, res) {
    var query = "delete from ?? where ?? = ?"
    var table = ['user', 'id_user', req.body.id_user]
    query = mysql.format(query, table)
    con.query(query, function (error, rows) {
        if (error) {
            res.status(500).json({
                success: false,
                error: error
            })
        } else if (!error) {
            res.status(200).json({
                success: true,
                message: 'User with id = ' +req.body.id_user+' has deleted'
            })
        }
    })
}

exports.editUserProfile = function (req, res) {
    var query = "update ?? set ?? = ?, ?? = ?, ?? = ? where ?? = ?"
    var table = ['user', 'username', req.body.username, 'email', req.body.email, 'password', md5(req.body.password),'id_user', req.body.id_user]

    query = mysql.format(query, table)
    con.query(query, function (error, rows) {
        if (error) {
            res.status(500).json({
                success: false,
                error: error
            })
        } else if (!error) {
            res.status(200).json({
                success: true,
                message: 'Data user with id '+req.body.id_user+' has updated',
                id_user: req.body.id_user,
                userName: req.body.username,
                email: req.body.email,
                password: md5(req.body.password)
            })
        }
    })
}

exports.postTest = function (req, res){
    var post = {
        id_user: req.body.id_user,
        nama_diagnosis: req.body.nama_diagnosis,
        nama_obat: req.body.nama_obat,
        keterangan:req.body.keterangan,
        date: new Date()
    }

    con.query('INSERT INTO riwayat set ?', post, function(error, rows, fields){
        if (error){
            res.status(500).json({
                success: false,
                error: error
            })
        }else{
            res.status(200).json({
            success: true,
            message: 'Test sent succesfully',
            history:({
                data:({
                    id_user: post.id_user,
                    nama_diagnosis: post.nama_diagnosis,
                    nama_obat: post.nama_obat,
                    keterangan: post.keterangan,
                    date: Date()
                    })
                })
            })
        } 
    })
}

exports.deleteHistorybyId = function(req,res){
    var query = "delete from ?? where ?? = ?"
    var table = ['riwayat', 'id_riwayat', req.body.id_riwayat]
    query = mysql.format(query, table)
    con.query(query, function (error, rows) {
        if (error) {
            res.status(500).json({
                success: false,
                error: error
            })
        } else if (!error) {
            res.status(200).json({
                success: true,
                message: 'History with id = '+req.body.id_riwayat+' has deleted'
            })
        }
    })
}