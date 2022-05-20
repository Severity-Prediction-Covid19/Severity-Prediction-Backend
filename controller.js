'use strict'

var response = require('./res')
const connection = require('./connection');

exports.index = function (req, res) {
    response.ok("REST API Application works", res)
}

//Post history
exports.riwayat = function (req, res) {
    //melakukan request melalui body
    var id_obat = req.body.id_obat;
    var id_user = req.body.id_user;
    var id_diagnosis = req.body.id_diagnosis;
    var keterangan = req.body.keterangan;
    var date = new Date();

    connection.query('INSERT INTO riwayat (id_obat, id_user, id_diagnosis, keterangan, date) VALUES (?,?,?,?,?)',
        [id_obat, id_user, id_diagnosis, keterangan, date], function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Successfully Added Riwayat ", res);
            }
        });

};