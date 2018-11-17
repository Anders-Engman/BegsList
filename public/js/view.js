$(function() {
  // Getting a reference to the input field where user adds a new item
  var $newItemInput = $("input.new-item-input");
  $(document).on("click", "#find-items", displaySimilarItems);

  // Function to empty out previous searches
  function clear() {
    $("#display-similar-items").empty();
  }

  //Displaying similar items
  function displaySimilarItems(event) {
    event.preventDefault();

    //empty out previous searches
    clear();

    var item = {
      name: $newItemInput.val().trim()
    };
    $.post("/api/searchItems", item, function(data) {
      console.log(data);

      var similarItemsDiv = $("<div>");
      similarItemsDiv.addClass("row d-flex align-self-center flex-wrap");

      for (var i = 0; i < data.length; i++) {
        //title
        var title = $("<a>");
        title.text(data[i].title);
        title.attr("href", data[i].viewSite);
        //Image
        var image = $("<img>");
        image.attr("src", data[i].imageURL);
        image.attr("style", "height:230px; weight: 380px");
        //Price
        var price = $("<p>");
        price.text("US $" + data[i].price);

        //Button to choose
        var chooseButton = $("<button>");
        chooseButton.addClass("btn btn-info");
        chooseButton.attr("id", "choose-button");
        chooseButton.text("Choose");
        chooseButton.attr("data-title", data[i].title);
        chooseButton.attr("data-imageURL", data[i].imageURL);
        chooseButton.attr("data-price", data[i].price);
        chooseButton.attr("data-viewSite", data[i].viewSite);

        //Div to wrap the four elements above up
        var oneItemDiv = $("<div>");
        oneItemDiv.addClass("col-sm-3 p-3");
        oneItemDiv.attr("id", i);
        oneItemDiv.append(image);
        oneItemDiv.append(title);
        oneItemDiv.append(price);
        oneItemDiv.append(chooseButton);
        similarItemsDiv.append(oneItemDiv);
      }

      $("#display-similar-items").append(similarItemsDiv);
    });
  }

  $(document).on("click", "#choose-button", function(event) {
    event.preventDefault();
    //TODO: DISPLAY THE CHOSEN ITEM HERE //FINISHED
    var title = $(this).attr("data-title");
    var imageURL = $(this).attr("data-imageURL");
    var price = $(this).attr("data-price");
    var viewSite = $(this).attr("data-viewSite");

    //chosen Item title
    var chosenItemTitle = $("<a>");
    chosenItemTitle.text(title);
    chosenItemTitle.attr("href", viewSite);
    //chosen Item Image
    var chosenItemImage = $("<img>");
    chosenItemImage.attr("src", imageURL);
    chosenItemImage.attr("style", "height:230px; weight: 380px");
    chosenItemImage.addClass("mx-auto d-block");
    //chosen Item Price
    var chosenItemPrice = $("<p>");
    chosenItemPrice.text("US $" + price);

    //Image Div
    var imageDiv = $("<div>");
    // imageDiv.addClass("float-left");
    imageDiv.append(chosenItemImage);
    //Text Div
    var textDiv = $("<div style='clear: left'>");
    textDiv.append(chosenItemTitle);
    textDiv.append(chosenItemPrice);

    $("#chosen-item-div").append(imageDiv);
    $("#chosen-item-div").append(textDiv);

    //TODO: CREATE A NEW SUBMIT BUTTON
    //TODO: CREATE A REASON TEXTAREA FORM
  });

  //TODO: CREATE A EVENT LISTENER FOR THE SUBMIT BUTTON

  // Getting items from database when page loads
  // getItems();
  // This function grabs items from the database and updates the view
  // function getItems() {
  //     $.get("/api/items", function (data) {
  //         console.log(data); //showing all data inside the database
  //         items = data;
  //     });
  // }
});
