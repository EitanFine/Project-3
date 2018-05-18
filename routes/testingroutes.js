const express = require("express");
const router = express.Router();
const stuff_controllers = require("../controllers/stuff_controllers");

router.get("/",
  stuff_controllers.findAllItems
);

// router.get("/users",
//   stuff_controllers.findAllUsers
// );

router.post("/",
  stuff_controllers.addItem
);

router.get("/oneitem/:id",
  stuff_controllers.findOneItem
);

router.get("/category",
  stuff_controllers.findAllCategories
);

router.get("/postlisting",
  stuff_controllers.findAllCategories
);


module.exports = router;