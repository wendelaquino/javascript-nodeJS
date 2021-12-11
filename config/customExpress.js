const express = require('express')
const consign = require('consign')
const bodyParser = require("body-parser");
const {application_name} = require("pg/lib/defaults");

module.exports = () => {
    const app = express()

    app.use(bodyParser.urlencoded({extended: true}))
    app.use(bodyParser.json())

    consign()
        .include('controllers')
        .into(app)

    return app
}
