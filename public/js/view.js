$(function () {

    //set page for incrementation (used as offset logic in the back-end)
    var page = 1;

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
            name: $newItemInput.val().trim(),
            page: page
        };
        showSearchResults(item);
    }

    //Choose Button to choose a specific item 
    $(document).on("click", ".choose-button", function (event) {
        event.preventDefault();
        //FINISHED TODO: DISPLAY THE CHOSEN ITEM HERE 
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
        imageDiv.append(chosenItemImage);
        //Text Div
        var textDiv = $("<div style='clear: left'>");
        textDiv.append(chosenItemTitle);
        textDiv.append(chosenItemPrice);

        $("#chosen-item-div").append(imageDiv);
        $("#chosen-item-div").append(textDiv);

        //FINISHED TODO: CREATE A NEW SUBMIT BUTTON 
        var submitButton = $("<button>");
        submitButton.addClass("btn btn-primary");
        submitButton.attr("id", "submit-button");
        submitButton.text("Submit");
        submitButton.attr("data-title", title);
        submitButton.attr("data-imageURL", imageURL);
        submitButton.attr("data-price", price);
        submitButton.attr("data-viewSite", viewSite);

        //FINISHED TODO: CREATE A REASON TEXTAREA FORM 
        var reasonText = $("<textarea>");
        reasonText.addClass("form-control mb-3");
        reasonText.attr("id", "reason-textarea");
        reasonText.attr("rows", "10");
        reasonText.attr("placeholder", "Add a Reason(s) Why You Need This Item");

        $("#chosen-item-div").append(reasonText);
        $("#chosen-item-div").append(submitButton);
    });


    //Submit button to send three main elements to database
    $(document).on("click", "#submit-button", function (event) {
        event.preventDefault();

        //reason text 
        var showReasonText = $("#reason-textarea").val().trim();
        console.log(showReasonText);

        var itemName = $(this).attr("data-title");
        var imageURL = $(this).attr("data-imageURL");
        var itemURL = $(this).attr("data-viewSite");
        var reason = showReasonText;

        var newItem = {
            name: itemName,
            itemURL: itemURL,
            reason: reason,
            imageURL: imageURL
        }

        $.post("/api/items", newItem, function () {
            window.location.href = "/";
        })
    });

    //"Show more" button to show more items' search results
    $(document).on("click", ".more-button", function (event) {
        //hide the show more text 
        $(".more-button").hide();

        //increment a page for the back-end api routes offset logic
        page += 1;

        var item = {
            name: $newItemInput.val().trim(),
            page: page
        };
        showSearchResults(item);
    });


    //show the items search results on browser 
    function showSearchResults(item) {
        $.post("/api/searchItems", item, function (data) {
            console.log(data);

            var similarItemsDiv = $("<div>");
            similarItemsDiv.addClass("row d-flex align-self-center flex-wrap text-center");

            for (var i = 0; i < data.length; i++) {

                //title
                var title = $("<a>");
                title.text(data[i].title);
                title.attr("href", data[i].viewSite);
                //Image
                var image = $("<img>");
                image.attr("src", data[i].imageURL);
                image.attr("style", "height:230px");
                //Price
                var price = $("<p>");
                price.text("US $" + data[i].price);

                //Button to choose 
                var chooseButton = $("<button>");
                chooseButton.addClass("btn btn-info choose-button");
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
            //Button to load "more" results
            var loadMoreButton = $("<button>")
            loadMoreButton.addClass("btn btn-default text-secondary more-button");
            loadMoreButton.text("Show more");

            var loadMoreButtonDiv = $("<div>");
            loadMoreButton.addClass("col-12 text-center mt-5");
            loadMoreButtonDiv.append(loadMoreButton);

            $("#display-similar-items").append(similarItemsDiv);
            $("#display-similar-items").append(loadMoreButtonDiv);
        });
    }

    //TODO: RESPONSIVE DESIGN FOR THE ITEM PAGE

});