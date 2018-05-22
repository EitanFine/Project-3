//dependencies
var express = require("express");
var session = require("express-session");
var passport = require("../config/passport");
var router = express.Router();
var db = require("../models");
var Sequelize = require("sequelize");

var Geocodio = require("geocodio");

var config = {
  api_key: "50cad5fed331adf803989a338aee9ffaf5f04a8"
};

var geocodio = new Geocodio(config);

module.exports = {
  findAllItems: function (req, res) {
    console.log("findAll");
    db.Item.findAll({
      order: [["id", "DESC"]]
    }).then(function (results) {
      res.json(results);
    });
  },

  addItem: function (req, res) {
    req.body.itemUserId = req.user.id;
    console.log("ADD ITEM: ===============>", req.body);
    db.Item.create(req.body).then(function (result) {
      res.redirect("/");
    });
  },

  addComment(req, res) {
    req.body.commentUserId = req.user.id;
    req.body.commentItemId = req.params.id;
    req.body.commentUserName = req.user.name;
    console.log("============>", req.body);
    db.Comment.create(req.body)
      .then(result => {
        res.redirect('/')
      })
  },

  getComments(req, res) {
    db.Comment.findAll({
      where: {
        commentItemId: req.params.id
      }
    })
      .then(results => {
        res.json(results)
      })
      .catch(err => { console.log(err) })


  },

  findOneItem: function (req, res) {
    db.Item.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (result) {
      db.RentedDates.findAll({
        where: {
          rentItemId: req.params.id
        }
      })
        .then(function (resultdates) {
          db.User.findOne({
            where: {
              id: result.dataValues.itemUserId
            }
          })
            .then(function (results) {
              var address =
                results.streetAddress +
                " " +
                results.city +
                " " +
                results.state +
                " " +
                results.zipcode;
              console.log(address);
              geocodio.get("geocode", { q: address }, function (err, response) {
                if (err) throw err;
                res.json({
                  itemInfo: result,
                  userInfo: results,
                  renteddates: resultdates,
                  lat: JSON.parse(response)
                });
              });
            })
            .catch(err => {
              console.log(err);
            });
        });
    });
  },

  findAllCategories: function (req, res) {
    db.Category.findAll({ order: [["id", "DESC"]] }).then(function (results) {
      res.json(results);
    });
  },

  allItemsByUser: function (req, res) {
    db.Item.findAll({
      where: {
        itemUserId: req.user.id
        //CHANGE THIS SO THAT ITS CURRENT USER...is it req.user.id?
      },
      order: [["id", "DESC"]]
    }).then(function (results) {
      res.json(results);
    });
  },

  deleteOneItem: function (req, res) {
    db.Item.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function (result) {
        res.status(200).json(result);
      })
      .catch(err => res.status(500).json(err));
  },

  editOneItem: function (req, res) {

    db.Item.update(req.body, {
      where: {
        id: req.body.id
      }
    }).then(function (result) {
      res.status(200).json(result);
    })
      .catch(err => res.status(500).json(err));
  }
};

router.use(passport.initialize());
router.use(passport.session());