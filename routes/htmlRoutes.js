var db = require("../models");

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    db.Item.findAll({
      include: [db.User]
    }).then(function (dbItems) {
      res.render("index", {
        items: dbItems
      });
    });
  });

  //load items page (Beg input and suggested items list)
  app.get("/items", function (req, res) {
    db.Item.findAll({}).then(function (dbItem) {
      res.render("items");
    });
  });

  app.get("/test-modal", function (req, res) {
    // db.User.findAll({}).then(function(dbItems) {
    res.render("test", {
      // msg: "Welcome!",
      // examples: dbItems
    });
    // console.log(dbItems);
    // });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function (req, res) {
    db.Example.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (
      dbExample
    ) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};