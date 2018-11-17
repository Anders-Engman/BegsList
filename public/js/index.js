// Get references to page elements
var $exampleText = $("#example-text");
var $exampleDescription = $("#example-description");
var $submitBtn = $("#submit");
var $exampleList = $("#example-list");

// The API object contains methods for each kind of request we'll make
var API = {
  saveExample: function(example) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/examples",
      data: JSON.stringify(example)
    });
  },
  getExamples: function() {
    return $.ajax({
      url: "api/examples",
      type: "GET"
    });
  },
  deleteExample: function(id) {
    return $.ajax({
      url: "api/examples/" + id,
      type: "DELETE"
    });
  }
};

// refreshExamples gets new examples from the db and repopulates the list
var refreshExamples = function() {
  API.getExamples().then(function(data) {
    var $examples = data.map(function(example) {
      var $a = $("<a>")
        .text(example.text)
        .attr("href", "/example/" + example.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": example.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $exampleList.empty();
    $exampleList.append($examples);
  });
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var example = {
    text: $exampleText.val().trim(),
    description: $exampleDescription.val().trim()
  };

  if (!(example.text && example.description)) {
    alert("You must enter an example text and description!");
    return;
  }

  API.saveExample(example).then(function() {
    refreshExamples();
  });

  $exampleText.val("");
  $exampleDescription.val("");
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteExample(idToDelete).then(function() {
    refreshExamples();
  });
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$exampleList.on("click", ".delete", handleDeleteBtnClick);

// Beg's List Client Side Javascipt Vote Code

$(document).ready(function() {
  $("#sidebarToggle").on("click", function() {
    $(
      ".layout__side-bar, .layout__main, .layout__items-list, .menu"
    ).toggleClass("active");
  });

  $("#collapseToggle").on("click", function() {
    $(
      ".layout__side-bar, .layout__main, .layout__items-list, .menu"
    ).toggleClass("active");
  });

  $(".up-vote").on("click", function() {
    var itemId = $(this).data("id");
    console.log("upvote", itemId);
  });

  $(".down-vote").on("click", function() {
    var itemId = $(this).data("id");
    console.log("downvote", itemId);
  });

  // Post Vote
  $(".up-vote, .down-vote").on("click", function(event) {
    //Dr. Spaceman User Id
    var testUserId = 9;

    //Toggle Button's Selected Class
    $(this).toggleClass("selected");

    // Make POST using the User's ID (temp Dr. Spaceman), the Item's ID, and the buttons value (1 or -1)
    $.ajax({
      method: "POST",
      url: "api/votes/",
      data: {
        voteValue: $(this).data("val"),
        ItemId: $(this).data("id"),
        UserId: testUserId
      }
    }).then(function(response) {
      event.preventDefault();
      console.log("Anything?");
      console.log(response);
    });
  });
});
