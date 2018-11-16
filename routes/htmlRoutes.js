var db = require("../models");

// ==== Debugging Functions ==== //
// Log Sequelize Statements as raw SQL
function sqlLogger(msg) {
  console.log("SQL Log:");
  console.log(msg);
}

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
      insertItemColorVal(dbItems);
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
