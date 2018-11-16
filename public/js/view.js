$(function () {
    // Getting a reference to the input field where user adds a new item
    var $newItemInput = $("input.new-item-input");
    // Our new items will go inside the itemContainer
    //var $itemContainer = $(".item-container");
    $(document).on("click", "#find-items", displaySimilarItems);
    //$(document).on("submit", "#item-form", insertItem);

    // Our initial items array
    var items = [];

    // Getting items from database when page loads
    getItems();

    //Displaying similar items
    function displaySimilarItems(event) {
        event.preventDefault();
        //insertItem(event);
        var item = {
            name: $newItemInput.val().trim()
        };
        $.post("/api/searchItems", item, function (data) {
            console.log(data);

            var similarItemsDiv = $("<div>");

            for (var i = 0; i < data.length; i++) {

                var title = $("<h3>");
                title.text(data[i].title)
                var image = $("<img>");
                image.attr("src", data[i].imageURL);
                var price = $("<p>");
                price.text("US $" + data[i].price);
                var viewSite = $("<a>");
                viewSite.attr("href", data[i].viewSite);
                viewSite.text("visit page");
                var oneItemDiv = $("<div>");
                oneItemDiv.attr("id", i);
                oneItemDiv.append(title);
                oneItemDiv.append(image);
                oneItemDiv.append(price);
                oneItemDiv.append(viewSite);
                similarItemsDiv.append(oneItemDiv);
            }

            $("#display-similar-items").append(similarItemsDiv);
        });
    }

    // This function grabs items from the database and updates the view
    function getItems() {
        $.get("/api/items", function (data) {
            console.log(data); //showing all data inside the database
            items = data;
        });
    }

    // This function inserts a new item into our database and then updates the view
    function insertItem(event) {
        event.preventDefault();
        var item = {
            name: $newItemInput.val().trim()
        };
        $.post("/api/items", item, function (data) {
            //console.log(data);
            location.reload();
        });
        $newItemInput.val("");
    }

});