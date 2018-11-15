var db = require("../models");

require("dotenv").config();
var request = require("request");

module.exports = function (app) {
  //Get Similar ebay Items 
  app.get("/api/ebay", function (req, res) {
    var appId = "";
    var itemName = "jeans"; //TODO: item name will be based on the USER INPUT

    //Find the search ItemId
    var query_Finding_URL =
      "http://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsAdvanced&SERVICE-VERSION=1.0.0&SECURITY-APPNAME=" +
      appId +
      "&GLOBAL-ID=EBAY-US&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&keywords=" +
      itemName +
      "&paginationInput.entriesPerPage=1";

    request(query_Finding_URL, function (error, response, body) {
      if (!error && response.statusCode === 200) {
        console.log(
          JSON.parse(body).findItemsAdvancedResponse[0].searchResult[0].item
        );

        var newItemId = JSON.parse(body).findItemsAdvancedResponse[0].searchResult[0].item[0].itemId;

        //Using the ItemId to find other similar items
        var query_Similar_URL =
          "http://svcs.ebay.com/MerchandisingService?OPERATION-NAME=getSimilarItems&SERVICE-NAME=MerchandisingService&SERVICE-VERSION=1.1.0&CONSUMER-ID=" +
          appId +
          "&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&itemId=" +
          newItemId +
          "&maxResults=5";

        request(query_Similar_URL, function (error, response, body) {
          if (!error && response.statusCode === 200) {
            console.log(
              JSON.parse(body).getSimilarItemsResponse.itemRecommendations.item
            );

            var itemList = JSON.parse(body).getSimilarItemsResponse.itemRecommendations.item;
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

  // Get all examples
  app.get("/api/items", function (req, res) {});

  // Create a new example
  app.post("/api/item", function (req, res) {});

  // Delete an example by id
  app.delete("/api/examples/:id", function (req, res) {});

};