var express = require("express");
var session = require("express-session");
var passport = require("../config/passport");
var router = express.Router();
var db = require("../models");
var Sequelize = require("sequelize");
const stuff_controllers = require("../../controllers/stuff_controllers");

let anotherObject;
router.get("/", function(req, res) {
//  console.log(stuff_controllers.findAllItems())
alert("Asdfasdf")
});

module.exports = router;