const express = require("express");
const router = express.Router();
const stuff_controllers = require("../controllers/stuff_controllers");

router.get("/",
  stuff_controllers.findAllItems
);

router.post("/",
  stuff_controllers.addItem
);

module.exports = router;