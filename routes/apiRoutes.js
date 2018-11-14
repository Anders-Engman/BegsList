var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/items", function(req, res) {});

  // Create a new example
  app.post("/api/item", function(req, res) {});

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {});
};
