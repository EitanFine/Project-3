const express = require("express");
const router = express.Router();
const stuff_controllers = require("../controllers/stuff_controllers");

router.get("/",
  stuff_controllers.findAllItems
);

// router.get("/:id",
//   stuff_controllers.findAllItems
// );

router.post("/",
  stuff_controllers.addItem
);

router.get("/oneitem/:id",
  stuff_controllers.findOneItem
);

module.exports = router;