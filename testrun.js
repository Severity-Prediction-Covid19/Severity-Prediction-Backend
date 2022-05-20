'use strict'

module.exports = function (app) {
    var myjson = require("./controller");
    
    app.route("/")
        .get(myjson.index);

    app.route("/addRiwayat")
        .post(myjson.riwayat);

    app.route("/checkRiwayat/:id")
        .get(myjson.tampilRiwayat);

    // app.route("/checkRiwayat1/:id")
    //     .get(myjson.tampilRiwayat1);
}