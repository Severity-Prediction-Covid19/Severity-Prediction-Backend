const express = require('express');
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var route = require("./src/routes")
route(app)

const port = process.env.PORT || 3000
const host = process.env.HOST || 'localhost'

app.listen(port, () => {
    console.log(`Server started on ${port} and running at host ${host}`);
});