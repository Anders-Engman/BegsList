var db = require("../models");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

// Custom Middleware to create dynamic gradient
require("../config/middleware/gradientSort");

// Custom Middleware to sort Index by Vote Sum, to total Vote Counts, to implement frontend Vote displays
require("../config/middleware/voteSortLogic");

// ==== Debugging Functions ==== //
// Log Sequelize Statements as raw SQL
sqlLogger = function(msg) {
  console.log("SQL Log:");
  console.log(msg);
};

// Console log rank and color
logRankAndColor = function(results) {
  for (var i = 0; i < results.length; i++) {
    console.log(
      results[i].dataValues.Item.name,
      "-",
      results[i].dataValues.itemScore,
      "votes. Color:",
      results[i].dataValues.Color
    );
  }
};

module.exports = function(app) {
  app.get("/unauth", function(req, res) {
    db.Vote.findAll({
      attributes: [
        [db.sequelize.fn("SUM", db.sequelize.col("voteValue")), "itemScore"],
        "ItemId"
      ],
      group: ["ItemId"],
      include: [{ model: db.Item, include: { model: db.User } }]
      // logging: sqlLogger
    }).then(function(dbItems) {
      sortByItemScoreSum(dbItems);
      insertItemColorVal(dbItems);
      res.render("index", {
        items: dbItems
      });
    });
  });

  // Load homepage
  app.get("/", function(req, res) {
    // object destructuring: this miracle syntax allows you to ref
    // "userName" as if you were referencing "req.user.userName";
    // saves keystrokes.
    // var { id, userName, bio, image, begScore, last_login, name } = req.user;
    // var userData = {
    //   id: id,
    //   userName: userName,
    //   bio: bio,
    //   image: image,
    //   begScore: begScore,
    //   last_login: last_login,
    //   name: name
    // };

    console.log(req.user);

    //On homepage load, find the SUM of every ItemId's voteValue, sequelize returns this data by ItemId ascending
    db.Vote.findAll({
      attributes: [
        [db.sequelize.fn("SUM", db.sequelize.col("voteValue")), "itemScore"],
        "ItemId"
      ],
      group: ["ItemId"],
      include: [{ model: db.Item, include: [{ model: db.User }] }]
    }).then(function(dbItems) {
      // Sort Items by itemScore from High to Low (located in /config/middleware/voteSortLogic)
      sortByItemScoreSum(dbItems);

      //Apply Color Property to the Item in relation to topColor/bottomColor and position on list (located in /config/middleware/gradientSort)
      insertItemColorVal(dbItems);

      // If the user is defined, find the User's Vote history and then render the index template, else skip querying the vote history and render index
      if (req.user) {
        db.Vote.findAll({
          where: { UserId: req.user.id }
        }).then(function(userVotes) {
          res.render("index", {
            items: dbItems,
            user: req.user,
            userInfo: userVotes,
            helpers: {
              plusMinusVoteCount: plusMinusVoteCount,
              applySelected: applySelected
            }
          });
        });
      } else {
        res.render("index", {
          items: dbItems,
          user: req.user,
          helpers: {
            plusMinusVoteCount: plusMinusVoteCount,
            applySelected: applySelected
          }
        });
      }
    });
  });

  //Load search items page (Beg input and suggested items list)
  app.get("/items", function(req, res) {
    res.render("items", {
      user: req.user
    });
  });

  //Load About Page
  app.get("/about", function(req, res) {
    res.render("about", {
      user: req.user
    });
  });

  app.get("/test-modal", function(req, res) {
    res.render("test", {
      user: req.user
    });
  });

  // Load Item Template - pass db Item via ItemId
  app.get("/items/:id", function(req, res) {
    // console.log(req.user);
    db.Item.findAll({
      where: { id: req.params.id },
      include: [
        { model: db.User },
        { model: db.Vote },
        { model: db.BegComment }
      ]
    }).then(function(dbItem) {
      // console.log(dbItem);
      if (req.user) {
        db.Vote.findAll({
          where: { UserId: req.user.id }
        }).then(function(userVotes) {
          res.render("item-single", {
            item: dbItem,
            user: req.user,
            userInfo: userVotes,
            helpers: {
              plusMinusVoteCount: plusMinusVoteCount,
              applySelected: applySelected
            }
          });
        });
      } else {
        res.render("item-single", {
          item: dbItem,
          user: req.user,
          helpers: {
            plusMinusVoteCount: plusMinusVoteCount,
            applySelected: applySelected
          }
        });
      }
    });
  });

  // Load User Template - pass db Item via ItemId
  app.get("/user/:id", function(req, res) {
    console.log(req.user);
    db.User.findAll({
      where: {
        id: req.params.id
      },
      include: [{ model: db.Item, include: { model: db.Vote } }]
    }).then(function(dbUser) {
      if (req.user) {
        db.Vote.findAll({
          where: { UserId: req.user.id }
        }).then(function(userVotes) {
          res.render("user-single", {
            userView: dbUser,
            user: req.user,
            userInfo: userVotes,
            helpers: {
              plusMinusVoteCount: plusMinusVoteCount,
              applySelected: applySelected
            }
          });
        });
      } else {
        res.render("user-single", {
          userView: dbUser,
          user: req.user,
          helpers: {
            plusMinusVoteCount: plusMinusVoteCount,
            applySelected: applySelected
          }
        });
      }
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
