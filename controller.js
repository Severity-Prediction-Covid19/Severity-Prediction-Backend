'use strict';
const con = require('./connection');
var mysql = require('mysql')

exports.index = function (req, res) {
    res.status(200).json({
        success: true,
        message: 'Data has found'
    })
}

exports.showUserHistory = function (req, res) {
    let id = req.params.id

    con.query('select * from riwayat where id_user = ?', [id], function (error, rows, fields) {
        res.status(200).json({
            success: true,
            message: 'Data has found',
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
            message: 'Success',
            userProfile: ({
                data: rows
            })
        })
    })
}

exports.deletebyId = function (req, res) {
    //let id = req.params.id
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
                error: false,
                message: 'User with id = ' +req.body.id_user+' has deleted'
            })
        }
    })
}

exports.editUserProfile = function (req, res) {
    var query = "update ?? set ?? = ? where ?? = ?"
    var table = ['user', 'username', req.body.username, 'id_user', req.body.id_user]
    query = mysql.format(query, table)
    con.query(query, function (error, rows) {
        if (error) {
            res.status(500).json({
                success: false,
                error: error
            })
        } else if (!error) {
            res.status(200).json({
                error: false,
                message: 'Data has changed',
                id_user: req.body.id_user,
                userName: req.body.username
            })
        } else {
            res.status(404).json({
                error: true,
                message: 'Data not found'
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
        //For checking overall fields if there any blank field when input data
        /*if(params.id_user === '' ||params.keterangan === '' || params.nama_obat === '' ||params.nama_diagnosis === '' ||params.date === ''){
            res.status(400).json({
                success: false,
                message: "There is a blank field. Please re-check your data before submit"
            }) */
        if(post.id_user === ''){ 
            res.status(500).json({
                success: false,
                message: "please define id of user"
            })
        } else if(post.keterangan === ''){
            res.status(500).json({
                success: false,
                message: "please define keterangan"
            })
        }else if(post.nama_obat === ''){
            res.status(500).json({
                success: false,
                message: "please define nama obat"
            })
        }else if(post.nama_diagnosis === ''){
            res.status(500).json({
                success: false,
                message: "please define nama diagnosis"
            })
        }else if (error){
            console.log(error)
        }else{
            res.status(200).json({
            success: true,
            message: 'Data succesfully send',
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
    var table = ['riwayat', 'id_riwayat', req.body.id_user]
    query = mysql.format(query, table)
    con.query(query, function (error, rows) {
        if (error) {
            res.status(500).json({
                success: false,
                error: error
            })
        } else if (!error) {
            res.status(200).json({
                error: false,
                message: 'Data has deleted'
            })
        }
    })
}