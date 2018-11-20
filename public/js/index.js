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

  // Post Vote
  $(".up-vote, .down-vote").on("click", function(event) {
    //Dr. Spaceman User Id
    var testUserId = 13;

    //Toggle Button's Selected Class
    $(this).toggleClass("selected");

    // Make POST using the User's ID (temp Dr. Spaceman), the Item's ID, and the buttons value (1 or -1)
    $.ajax({
      method: "POST",
      url: "/api/votes/",
      data: {
        voteValue: $(this).data("val"),
        ItemId: $(this).data("id"),
        UserId: testUserId
      }
    }).then(function(response) {
      event.preventDefault();

      console.log(response);
    });
  });
});
