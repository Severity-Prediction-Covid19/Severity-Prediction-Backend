'use strict'

module.exports = function (app) {
    var myjson = require("./controller");
    
    app.route("/")
        .get(myjson.index)    

    app.route("/user/:id")
        .get(myjson.getUserProfile)

    app.route("/user/update/")
        .put(myjson.editUserProfile)

    app.route("/user/delete/")
        .delete(myjson.deleteUserbyId)

    app.route("/tes")
        .post(myjson.postTest)

    app.route("/history/:id")
        .get(myjson.showUserHistory)
        
    app.route("/history/delete/")
        .delete(myjson.deleteHistorybyId)
}