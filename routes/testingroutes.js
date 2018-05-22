const express = require("express");
const router = express.Router();
const stuff_controllers = require("../controllers/stuff_controllers");
const db = require("../models");

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

// router.post("/addItem",
//  console.log (" testing routes additem" ,"");
//   stuff_controllers.addItem
// );

router.post("/addItem", (req, res) => {
  req.body.itemUserId = req.user.id
  db.Item.create(req.body)  
    .then(results => res.status(200).json("/"))
    .catch(err => console.log( 'testing route err ' , err));
});



router.get("/myitems",
  stuff_controllers.allItemsByUser
);

router.delete("/myitems/id/:id",
  stuff_controllers.deleteOneItem
);

router.put("/myitems/id/:id",
  stuff_controllers.editOneItem
);


module.exports = router;