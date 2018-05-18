//dependencies
var express = require("express");
var session = require("express-session");
var passport = require("../config/passport");
var router = express.Router();
var db = require("../models");
var Sequelize = require("sequelize");

module.exports = {
  findAllItems: function(req, res) {
    console.log("findAll");
    db.Item.findAll({}).then(function(results) {
      res.json(results);
    });
  },

  addItem: function (req, res) {
    db.Item.create(req.body).then(function (result) {
      res.redirect("/");
    });
  },

  findOneItem: function (req, res) {
    db.Item.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(result) {
      console.log("resut: ", result);

      db.User.findOne({
        where: {
          id: result.dataValues.itemUserId
        }
      })
        .then(function(results) {
          console.log({ itemInfo: result, userInfo: results });
          console.log("RESULTS: ", results);

          res.json({ itemInfo: result, userInfo: results });
        })
        .catch(err => {
          console.log(err);
        });
    });
  },

  findAllCategories: function(req, res) {
    db.Category.findAll({}).then(function(results) {
      res.json(results);
    });
  },

  allItemsByUser: function(req, res) {
    db.Item.findAll({
      where: {
        itemUserId: req.user.id
        //CHANGE THIS SO THAT ITS CURRENT USER...is it req.user.id?
      }
    }).then(function(results) {
      res.json(results);
    });
  }
};


router.use(passport.initialize());
router.use(passport.session());

