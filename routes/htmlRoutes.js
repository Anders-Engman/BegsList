var db = require("../models");

// Log Sequelize Statements as raw SQL
function sqlLogger(msg) {
  console.log("SQL Log:");
  console.log(msg);
}

function Color(hslObject) {
  this.hue = hslObject.hue;
  this.saturation = hslObject.saturation;
  this.lightness = hslObject.lightness;
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

// Sort Sequelize Query by the Items' voteScore
sortByItemScoreSum = function(results) {
  results.sort(function(a, b) {
    return b.dataValues.itemScore - a.dataValues.itemScore;
  });
};

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

setItemColor = function(startColor, hslValue, itemRank) {
  return {
    hue: startColor.hue - hslValue.hue * itemRank,
    saturation: startColor.saturation - hslValue.saturation * itemRank,
    lightness: startColor.lightness - hslValue.lightness * itemRank
  };
};

insertItemColorVal = function(results) {
  var itemListLength = results.length;
  var greenest = {
    hue: 130,
    saturation: 87,
    lightness: 45
  };
  var reddest = {
    hue: 10,
    saturation: 87,
    lightness: 45
  };

  hslDeltaVal = calcColorChange(greenest, reddest, itemListLength);

  for (var i = 0; i < itemListLength; i++) {
    itemColor = setItemColor(greenest, hslDeltaVal, i);
    results[i].dataValues.Color = new Color(itemColor);
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
      // console.log(dbItems);
      // logRankAndColor(dbItems);
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
