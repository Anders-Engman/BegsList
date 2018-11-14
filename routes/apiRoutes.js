var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {});

  // Create a new example
  app.post("/api/examples", function(req, res) {});

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {});
};
