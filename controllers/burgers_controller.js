var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");


router.use(function timeLog(req, res, next) {
  console.log("Time: ", Date.now());
  next();
});


router.get("/", function(req, res) {
  burger.all(function(data) {
    console.log(data);
    res.render("index", { burgers: data });
  });
});

router.post("/", function(req, res) {
  burger.create(
    ["burger_name", "devoured"],
    [req.body.burger_name, 0],
    function() {
      res.redirect("/");
    }
  );
});

router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update(
    {
      devoured: 1
    },
    condition,
    function() {
      res.redirect("/");
    }
  );
});

router.delete("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  burger.delete(condition, function() {
    res.redirect("/");
  });
});


module.exports = router;