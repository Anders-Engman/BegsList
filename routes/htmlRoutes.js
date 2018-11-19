var db = require("../models");
var Handlebars = require("express-handlebars");
// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

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

// ==== Handlebars Helpers ==== //
plusMinusVoteCount = function(VotesObj) {
  var negativeVoteCount = 0;
  var positiveVoteCount = 0;
  for (var i = 0; i < VotesObj.length; i++) {
    var currentVoteVal = VotesObj[i].voteValue;

    if (currentVoteVal > 0) {
      positiveVoteCount++;
    } else {
      negativeVoteCount++;
    }
  }
  return (
    '<span id="up-vote__count">' +
    positiveVoteCount +
    '</span> / <span id="down-vote__count">' +
    negativeVoteCount +
    "</span>"
  );
};

// Creat Color Constructor to add to returned Sequelize Model
function Color(hslObject) {
  this.hue = hslObject.hue;
  this.saturation = hslObject.saturation;
  this.lightness = hslObject.lightness;
}

// Sort Sequelize Query by the Items' voteScore
sortByItemScoreSum = function(results) {
  results.sort(function(a, b) {
    return b.dataValues.itemScore - a.dataValues.itemScore;
  });
};

// Calculate the rate of Color change from top color to bottom color
calcColorChange = function(topColor, bottomColor, listLength) {
  var colorDistance = {
    hue: topColor.hue - bottomColor.hue,
    saturation: topColor.saturation - bottomColor.saturation,
    lightness: topColor.lightness - bottomColor.lightness
  };
  var colorChangePerItem = {
    hue: Math.floor(colorDistance.hue / (listLength - 1)),
    saturation: Math.floor(colorDistance.saturation / (listLength - 1)),
    lightness: Math.floor(colorDistance.lightness / (listLength - 1))
  };
  return colorChangePerItem;
};

// Set the div's item color based on it position relative to the topColor/topItem
setItemColor = function(startColor, hslValue, itemRank) {
  return {
    hue: startColor.hue - hslValue.hue * itemRank,
    saturation: startColor.saturation - hslValue.saturation * itemRank,
    lightness: startColor.lightness - hslValue.lightness * itemRank
  };
};

insertItemColorVal = function(results) {
  // Set topColor and bottomColor values for gradient change
  var greenest = { hue: 130, saturation: 87, lightness: 45 };
  var reddest = { hue: 10, saturation: 87, lightness: 45 };
  hslDeltaVal = calcColorChange(greenest, reddest, results.length);
  for (var i = 0; i < results.length; i++) {
    itemColor = setItemColor(greenest, hslDeltaVal, i);
    results[i].Color = new Color(itemColor);
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
      include: [{ model: db.Item, include: { model: db.User } }],
      logging: sqlLogger
    }).then(function(dbItems) {
      sortByItemScoreSum(dbItems);
      insertItemColorVal(dbItems);
      res.render("index", {
        items: dbItems
      });
    });
  });
  // Load homepage
  app.get("/", isAuthenticated, function(req, res) {
    // object destructuring: this miracle syntax allows you to ref
    // "userName" as if you were referencing "req.user.userName";
    // saves keystrokes.
    var { userName, bio, image, begScore, last_login, name } = req.user;
    var userData = {
      userName: userName,
      bio: bio,
      image: image,
      begScore: begScore,
      last_login: last_login,
      name: name
    };

    db.Vote.findAll({
      attributes: [
        [db.sequelize.fn("SUM", db.sequelize.col("voteValue")), "itemScore"],
        "ItemId"
      ],
      group: ["ItemId"],
      include: [
        { model: db.Item, include: [{ model: db.User }, { model: db.Vote }] }
      ],
      logging: sqlLogger
    }).then(function(dbItems) {
      sortByItemScoreSum(dbItems);
      insertItemColorVal(dbItems);
      res.render("index", {
        items: dbItems,
        helpers: {
          plusMinusVoteCount: plusMinusVoteCount
        }
      });
    });
  });

  //load items page (Beg input and suggested items list)
  app.get("/items", function(req, res) {
    db.Item.findAll({}).then(function(dbItem) {
      res.render("items");
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

  // Load Item Template - pass db Item via ItemId
  app.get("/items/:id", function(req, res) {
    db.Item.findAll({
      where: {
        id: req.params.id
      },
      include: [
        {
          model: db.User
        },
        {
          model: db.Vote
        }
      ]
    }).then(function(dbItem) {
      res.render("item-single", {
        item: dbItem,
        helpers: {
          plusMinusVoteCount: plusMinusVoteCount
        }
      });
    });
  });

  // Load User Template - pass db Item via ItemId
  app.get("/user/:id", function(req, res) {
    db.User.findAll({
      where: {
        id: req.params.id
      },
      include: [{ model: db.Item, include: { model: db.Vote } }]
    }).then(function(dbUser) {
      res.render("user-single", {
        user: dbUser,
        helpers: {
          plusMinusVoteCount: plusMinusVoteCount
        }
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
