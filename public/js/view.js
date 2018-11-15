$(function () {
    // Getting a reference to the input field where user adds a new item
    var $newItemInput = $("input.new-item-input");
    // Our new items will go inside the itemContainer
    var $itemContainer = $(".item-container");

    $(document).on("submit", "#item-form", displaySimilarItems);

    // Our initial items array
    var items = [];

    // Getting items from database when page loads
    getItems();

    // This function resets the items displayed with new items from the database
    function initializeRows() {
        $itemContainer.empty();
        var rowsToAdd = [];
        for (var i = 0; i < items.length; i++) {
            rowsToAdd.push(createNewRow(items[i]));
        }
        $itemContainer.prepend(rowsToAdd);
    }

    // This function grabs items from the database and updates the view
    function getItems() {
        $.get("/api/items", function (data) {
            //console.log(data);
            items = data;
            initializeRows();
        });
    }

    function displaySimilarItems(event) {
        event.preventDefault();
        insertItem(event);
        $.get("/api/ebay", function (data) {
            console.log(data);
        });


    }

    // This function inserts a new item into our database and then updates the view
    function insertItem(event) {
        event.preventDefault();
        var item = {
            itemName: $newItemInput.val().trim(),

        };

        $.post("/api/items", item, function (data) {
            //console.log(data);
            location.reload();
        });
        $newItemInput.val("");
    }

    // This function constructs a item-row row
    function createNewRow(item) {
        //console.log(item);
        var $newInputRow = $(
            [
                "<li class='list-group-item item-row'>",
                "<span>",
                item.itemName,
                "</span>",
                "<input type='text' class='edit' style='display: none;'>",
                "<button class='delete btn btn-danger'>x</button>",
                "<button class='complete btn btn-primary'>✓</button>",
                "</li>"
            ].join("")
        );

        $newInputRow.find("button.delete").data("id", item.id);
        $newInputRow.find("input.edit").css("display", "none");
        $newInputRow.data("item", item);
        if (item.complete) {
            $newInputRow.find("span").css("text-decoration", "line-through");
        }
        return $newInputRow;
    }



});