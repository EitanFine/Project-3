const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const session = require("express-session");
const passport = require("./config/passport");
const logger = require("morgan");
var SequelizeStore = require('connect-session-sequelize')(session.Store);


const {auth} = require("./controllers")
// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 5000;

// Requiring our models for syncing
const db = require("./models");

app.use(session(({ 
  secret: "keyboard cat", 
  resave: true, 
  saveUninitialized: true,
  store: new SequelizeStore({
    db: db.sequelize
  }) 
})));

app.use(passport.initialize());
app.use(passport.session());
app.use(logger('dev'))


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// Static directory
app.use(express.static("public"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("rent_my_stuff/build"));
}

// const exphbs = require("express-handlebars");


// Routes
// =============================================================

// require("./routes/api-routes.js")(app);
// const routes = require("./controllers/stuff_controllers.js");
const routes = require("./routes/testingroutes.js");
app.use("/testingRoutes", routes);

// Sets up the Express app to handle data parsing
app.use("/auth", auth);

// Syncing our sequelize models and then starting our Express app
// ===========================================================
db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});
