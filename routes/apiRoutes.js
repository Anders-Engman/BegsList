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
    console.log("HEY HEY HEY", req.body);
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

  //GET Similar Search Items
  app.post("/api/searchItems", function(req, res) {
    var appId = process.env.EBAY_APIKEY;
    var itemName = req.body.name;

    var query_Finding_URL =
      "http://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsAdvanced&SERVICE-VERSION=1.0.0&SECURITY-APPNAME=" +
      appId +
      "&GLOBAL-ID=EBAY-US&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&keywords=" +
      itemName +
      "&paginationInput.entriesPerPage=1";

    request(query_Finding_URL, function(error, response, body) {
      if (!error && response.statusCode === 200) {
        // console.log(
        //   JSON.parse(body).findItemsAdvancedResponse[0].searchResult[0].item
        // );

        var newItemId = JSON.parse(body).findItemsAdvancedResponse[0]
          .searchResult[0].item[0].itemId;

        var query_Similar_URL =
          "http://svcs.ebay.com/MerchandisingService?OPERATION-NAME=getSimilarItems&SERVICE-NAME=MerchandisingService&SERVICE-VERSION=1.1.0&CONSUMER-ID=" +
          appId +
          "&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&itemId=" +
          newItemId +
          "&maxResults=5";

        request(query_Similar_URL, function(error, response, body) {
          if (!error && response.statusCode === 200) {
            // console.log(
            //   JSON.parse(body).getSimilarItemsResponse.itemRecommendations.item
            // );

            var itemList = JSON.parse(body).getSimilarItemsResponse
              .itemRecommendations.item;
            var similarItemsObj = [];

            for (var i = 0; i < itemList.length; i++) {
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
          res.send({ newVote: true });
        });
      }
      // If the Vote DOES exist,
      else {
        console.log("existing vote!");
        //check to see if the voteValue is equal
        if (vote.voteValue !== req.body.voteValue) {
          db.Vote.destroy({
            where: {
              ItemId: req.body.ItemId,
              UserId: req.body.UserId
            }
          }).then(vote => {
            db.Vote.create({
              voteValue: req.body.voteValue,
              ItemId: req.body.ItemId,
              UserId: req.body.UserId
            }).then(vote => {
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
            res.json(vote);
          });
        }
      }
    });
  });
};
