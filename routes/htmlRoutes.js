var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {});

  // Load user page and pass in an example by id
  app.get("/user/:id", function(req, res) {});

  // Load user page and pass in an example by id
  app.get("/item/:id", function(req, res) {});

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.send("404 - Page Not Found");
  });
};
