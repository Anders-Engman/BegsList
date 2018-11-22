var db = require("../models");
var passport = require("../config/passport");
require("dotenv").config();
var request = require("request");

module.exports = function(app) {
  app.post("/api/sign-up", function(req, res) {
    db.User.create(req.body)
      .then(function(dbUser) {
        console.log(dbUser);
        res.send(dbUser);
      })
      .catch(function(err) {
        console.log(err);
        res.json(err);
      });
  });

  app.post("/api/log-in", passport.authenticate("local"), function(req, res) {
    res.send("/");
  });

  // GET route for getting all of the items
  app.get("/api/items", function(req, res) {
    db.Item.findAll({}).then(function(dbItem) {
      res.json(dbItem);
      console.log(dbItem);
    });
  });

  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  //POST route for Similar Search Items
  app.post("/api/searchItems", function(req, res) {
    var appId = process.env.EBAY_APIKEY;
    var itemName = req.body.name;
    var page = parseInt(req.body.page);

    //Using Finding Ebay API to get the itemID
    var query_Finding_URL =
      "http://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsAdvanced&SERVICE-VERSION=1.0.0&SECURITY-APPNAME=" +
      appId +
      "&GLOBAL-ID=EBAY-US&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&keywords=" +
      itemName +
      "&paginationInput.entriesPerPage=1";

    request(query_Finding_URL, function(error, response, body) {
      if (!error && response.statusCode === 200) {
        var newItemId = JSON.parse(body).findItemsAdvancedResponse[0]
          .searchResult[0].item[0].itemId;
        var resultNumber = 8 * page;

        //Use the ItemID to apply in Merchandising Ebay getSimilarItems API
        var query_Similar_URL =
          "http://svcs.ebay.com/MerchandisingService?OPERATION-NAME=getSimilarItems&SERVICE-NAME=MerchandisingService&SERVICE-VERSION=1.1.0&CONSUMER-ID=" +
          appId +
          "&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&itemId=" +
          newItemId +
          "&maxResults=" +
          resultNumber;

        request(query_Similar_URL, function(error, response, body) {
          if (!error && response.statusCode === 200) {
            var itemList = JSON.parse(body).getSimilarItemsResponse
              .itemRecommendations.item;

            var similarItemsObj = [];

            //offset logic for 'show more' items search results loading
            var i;
            i = (page - 1) * 8;

            for (i; i < itemList.length; i++) {
              similarItemsObj.push({
                itemId: itemList[i].itemId,
                title: itemList[i].title,
                imageURL: itemList[i].imageURL,
                price: itemList[i].buyItNowPrice.__value__,
                viewSite: itemList[i].viewItemURL
              });
            }
            res.json(similarItemsObj);
          }
        });
      }
    });
  });
  app.post("/api/test-pics", function(req, res) {
    console.log(req);
    res.send("hey!");
  });
  //POST route for a new item
  app.post("/api/items", function(req, res) {
    console.log(req.body);
    db.Item.create({
      name: req.body.name,
      itemURL: req.body.itemURL,
      reason: req.body.reason
    }).then(function(dbItem) {
      //console.log(dbItem);
      res.json(dbItem);
    });
  });

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

  // Toggle Vote by UserId, ItemId, and voteValue
  app.post("/api/votes", function(req, res) {
    console.log(req.body);

    // Search Database to see if a Vote for that ItemId has been made by that UserId
    db.Vote.find({
      where: {
        ItemId: req.body.ItemId,
        UserId: req.body.UserId
      }
    }).then(vote => {
      // If that Vote DOES NOT exist,
      if (!vote) {
        console.log("new vote!");

        // Create that vote
        db.Vote.create({
          voteValue: req.body.voteValue,
          ItemId: req.body.ItemId,
          UserId: req.body.UserId
        }).then(vote => {
          res.json(vote);
        });
      }
      // If the Vote DOES exist,
      else {
        console.log("existing vote!");
        //check to see if the voteValue is equal
        if (
          Number.parseInt(vote.voteValue) !==
          Number.parseInt(req.body.voteValue)
        ) {
          db.Vote.destroy({
            where: {
              ItemId: req.body.ItemId,
              UserId: req.body.UserId
            }
          }).then(vote => {
            console.log("old vote deleted");
            db.Vote.create({
              voteValue: req.body.voteValue,
              ItemId: req.body.ItemId,
              UserId: req.body.UserId
            }).then(vote => {
              console.log("new vote created");
              res.json(vote);
            });
          });
        } else {
          // If the req.body.voteValue == drop that Vote
          db.Vote.destroy({
            where: {
              ItemId: req.body.ItemId,
              UserId: req.body.UserId
            }
          }).then(vote => {
            console.log("old vote deleted, no new one created");
            res.json(vote);
          });
        }
      }
    });
  });
};
