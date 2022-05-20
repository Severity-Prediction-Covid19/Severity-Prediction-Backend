'use strict';

var response = require('./res');
const connection = require('./connection');

exports.index = function (req, res) {
    response.ok("REST API Application works", res);
};

//Post riwayat
exports.riwayat = function (req, res) {
    //melakukan request melalui body
    var id_user = req.body.id_user;
    var nama_diagnosis = req.body.nama_diagnosis;
    var nama_obat = req.body.nama_obat;
    var keterangan = req.body.keterangan;
    var date = new Date();

    connection.query('INSERT INTO riwayat (id_user, nama_diagnosis, nama_obat, keterangan, date) VALUES (?,?,?,?,?)',
        [id_user, nama_diagnosis, nama_obat, keterangan, date], function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Successfully Added Riwayat", res);
            }
        });

};

// GET riwayat with JOIN tabel
exports.tampilRiwayat = function (req, res) {
    let id = req.params.id;

    connection.query('SELECT * FROM riwayat WHERE id_user =?',[id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok(rows, res);
            }
        }
    );
};


// GET riwayat with JOIN tabel
// exports.tampilRiwayat1 = function (req, res) {
//     let id = req.params.id;

//     connection.query('SELECT user.id_user, user.username, diagnosis.nama_diagnosis, obat.nama_obat FROM riwayat JOIN user JOIN obat JOIN diagnosis WHERE riwayat.id_user = user.id_user AND user.id_user =? AND riwayat.id_diagnosis = diagnosis.id_diagnosis AND riwayat.id_obat = obat.id_obat ORDER BY user.id_user;', [id],
//         function (error, rows, fields) {
//             if (error) {
//                 console.log(error);
//             } else {
//                 response.ok(rows, res);
//             }
//         }
//     );
// };