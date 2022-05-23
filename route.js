'use strict'

module.exports = function (app) {
    var myjson = require("./controller");
    
    app.route("/")
        .get(myjson.index);
        app.route("/user/:id")
        .get(myjson.getUserProfile)
    //havent fixed because its still using body not params
    app.route("/user/update/")
        .put(myjson.editUserProfile)
    //Havent fixed because its still using body not params
    app.route("/user/delete/")
        .delete(myjson.deletebyId)
    app.route("/history/:id")
        .get(myjson.showUserHistory)
    app.route("/tes")
        .post(myjson.postTest)
}