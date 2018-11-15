var db = require("../models");

module.exports = function (app) {

  // GET route for getting all of the items
  app.get("/api/items", function (req, res) {

    db.Items.findAll({}).then(function (dbItem) {
      res.json(dbItem);
      console.log(dbItem);
    });
  });


  var itemName = "socks"; //TODO: SHOULD BE FROM USER INPUT!!! AND THEN WILL APPLY IT INTO THE GET METHOD BELOW

  app.get("/api/ebay", function (req, res) {

    var appId = process.env.EBAY_APIKEY;
    var query_Finding_URL =
      "http://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsAdvanced&SERVICE-VERSION=1.0.0&SECURITY-APPNAME=" +
      appId +
      "&GLOBAL-ID=EBAY-US&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&keywords=" +
      itemName +
      "&paginationInput.entriesPerPage=1";

    request(query_Finding_URL, function (error, response, body) {
      if (!error && response.statusCode === 200) {
        // console.log(
        //   JSON.parse(body).findItemsAdvancedResponse[0].searchResult[0].item
        // );

        var newItemId = JSON.parse(body).findItemsAdvancedResponse[0].searchResult[0].item[0].itemId;

        var query_Similar_URL =
          "http://svcs.ebay.com/MerchandisingService?OPERATION-NAME=getSimilarItems&SERVICE-NAME=MerchandisingService&SERVICE-VERSION=1.1.0&CONSUMER-ID=" +
          appId +
          "&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&itemId=" +
          newItemId +
          "&maxResults=5";

        request(query_Similar_URL, function (error, response, body) {
          if (!error && response.statusCode === 200) {
            // console.log(
            //   JSON.parse(body).getSimilarItemsResponse.itemRecommendations.item
            // );

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





  // POST route for saving a new item. You can create a item using the data on req.body
  app.post("/api/items", function (req, res) {

    console.log(req.body);
    db.Items.create({
      itemName: req.body.itemName
    }).then(function (dbItem) {
      //console.log(dbItem);
      res.json(dbItem);
    });

  });
};