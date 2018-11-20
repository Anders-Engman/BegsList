// Beg's List Client Side Javascipt Vote Code
$(document).ready(function() {
  // When hamburger or 'Collapse <-' buttons are pushed, toggle '.active' class to key divs to create expanded/collapsed sidebar
  $("#sidebarToggle, #collapseToggle").on("click", function() {
    $(
      ".layout__side-bar, .layout__main, .layout__items-list, .menu"
    ).toggleClass("active");
  });

  // Post Vote
  $(".up-vote, .down-vote").on("click", function(event) {
    //MUST CREATE a new user, use this section to input their User ID to test
    var testUserId = 12;

    //Prevent href="#" reload
    event.preventDefault();

    //Toggle Button's Selected Class

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
      console.log(response);
    });
  });
});
