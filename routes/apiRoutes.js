var db = require("../models");
var passport = require("../config/passport");

module.exports = function(app) {
  // Create a new user
  app.post("/api/sign-up", function(req, res) {
    db.User.create(req.body)
      .then(function(dbUser) {
        console.log(dbUser);
        res.redirect(307, "/api/log-in");
      })
      .catch(function(err) {
        console.log(err);
        res.json(err);
      });
  });
  // log in user
  app.get("/api/log-in", function(req, res) {
    res.render("test", passport.authenticate("local"), function(req, res) {
      console.log("hey");
      res.json(req.body.user);
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
