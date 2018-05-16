const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const passport = require("./config/passport")

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 5000;

// Requiring our models for syncing
const db = require("./models");

app.use(session(({ secret: "keyboard cat", resave: true, saveUninitialized: true })))
app.use(passport.initialize());
app.use(passport.session());

// Sets up the Express app to handle data parsing

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// Static directory
app.use(express.static("public"));


// const exphbs = require("express-handlebars");


// Routes
// =============================================================

// require("./routes/api-routes.js")(app);
const routes = require("./controllers/stuff_controllers.js");
app.use(routes);

// Syncing our sequelize models and then starting our Express app
// ===========================================================
db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});
