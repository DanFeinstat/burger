//import burgers.js from models
//import express for express router
const burgers = require("../models/burgers");
const express = require("express");

//set up express router
const router = express.Router();

//set up get route
router.get("/", function(req, res) {
  burgers.all(function(results) {
    res.render("index", {
      burgers: results,
    });
  });
});

//set up post route
router.post("/api/burgers", function(req, res) {
  burgers.insert(req.body.burger_name, function(results) {
    res.status(200).json({ message: "new burger" });
  });
});

//set up update route
router.put("api/burgers/:id", function(req, res) {
  let burgerId = req.params.id;
  burgers.update(req.body.devoured, burgerId, function(results) {
    res.status(200).json({ message: "Updated devoured status" });
  });
});

module.exports = router;
