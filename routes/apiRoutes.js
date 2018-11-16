var db = require("../models");
var passport = require("../config/passport");

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    // db.item.findAll({}).then(function(dbExamples) {
    //   res.json(dbExamples);
    // });
  });

  // Create a new example
  app.post("/api/sign-up", function(req, res) {
    // db.Example.create(req.body).then(function(dbExample) {
    //   res.json(dbExample);
    // });

    db.User.create(req.body).then(function(dbUser) {
      console.log(dbUser);
      res.send(dbUser);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    // db.Example.destroy({ where: { id: req.params.id } }).then(function(
    //   dbExample
    // ) {
    //   res.json(dbExample);
    // });
  });
};
