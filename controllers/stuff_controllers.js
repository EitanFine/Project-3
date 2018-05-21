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
    db.Item.findAll({
      order: [['id', 'DESC']]
    }).then(function(results) {
      res.json(results);
    });
  },

  addItem: function(req, res) {
    req.body.itemUserId = req.user.id;

    console.log("ADD ITEM: ===============>", req.body);
    db.Item.create(req.body).then(function(result) {
      res.redirect("/");
    });
  },

  findOneItem: function(req, res) {
    db.Item.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(result) {
      //console.log("resut: ", result);
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
    db.Category.findAll({ }).then(function(results) {
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
  },

  deleteOneItem: function(req, res) {
    db.Item.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(result){
      console.log("=================================",result)
    })
  }
};

router.use(passport.initialize());
router.use(passport.session());
