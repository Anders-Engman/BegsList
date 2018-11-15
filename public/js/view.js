$(document).ready(function () {

    //TODO: a form + submit button

    function displaySimilarItems(event) {
        event.preventDefault();
        $.get("/api/ebay", function (data) {
            console.log(data);
        });

    }

    displaySimilarItems();

});