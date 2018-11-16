var db = require("../models");

gradientByVotes = function() {};

function sqlLogger(msg) {
  console.log("SQL Log:");
  console.log(msg);
}

sortByItemScoreSum = function(results) {
  results.sort(function(a, b) {
    return b.dataValues.itemScore - a.dataValues.itemScore;
  });
  for (var i = 0; i < results.length; i++) {
    console.log(
      results[i].dataValues.Item.name,
      "-",
      results[i].dataValues.itemScore,
      "votes"
    );
  }
};

module.exports = function(app) {
  // Load homepage
  app.get("/", function(req, res) {
    db.Vote.findAll({
      attributes: [
        [db.sequelize.fn("SUM", db.sequelize.col("voteValue")), "itemScore"],
        "ItemId"
      ],
      group: ["ItemId"],
      include: [{ model: db.Item, include: { model: db.User } }],
      logging: sqlLogger
    }).then(function(dbItems) {
      sortByItemScoreSum(dbItems);
      res.render("index", {
        items: dbItems
      });
    });
  });

  app.get("/test-modal", function(req, res) {
    // db.User.findAll({}).then(function(dbItems) {
    res.render("test", {
      // msg: "Welcome!",
      // examples: dbItems
    });
    // console.log(dbItems);
    // });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
