// Beg's List Client Side Javascipt Vote Code
$(document).ready(function() {
  // When hamburger or 'Collapse <-' buttons are pushed, toggle '.active' class to key divs to create expanded/collapsed sidebar
  $("#sidebarToggle, #collapseToggle").on("click", function() {
    $(
      ".layout__side-bar, .layout__main, .layout__main-container, .menu"
    ).toggleClass("active");
  });

  // Post Vote
  $(".up-vote, .down-vote").on("click", function(event) {
    event.preventDefault();
    var userId = $(".layout__main-container").data("user-id");
    var voteValue = $(this).data("val");
    var itemId = $(this).data("id");
    if (userId) {
      // Make POST using the User's ID (temp Dr. Spaceman), the Item's ID, and the buttons value (1 or -1)
      $.ajax({
        method: "POST",
        url: "/api/votes/",
        data: {
          voteValue: voteValue,
          ItemId: itemId,
          UserId: userId
        }
      }).then(function(response) {
        console.log(response);
        console.log(voteValue);
        console.log(response.voteValue);
        if (Number.parseInt(response.voteValue) > 0) {
          $(
            ".layout__vote-content [data-id=" +
              response.ItemId +
              "], .itemSingle__arrows [data-id=" +
              response.ItemId +
              "], .userSingle__arrows [data-id=" +
              response.ItemId +
              "]"
          ).addClass("selected-up-vote");
          $(
            ".layout__vote-content [data-id=" +
              response.ItemId +
              "], .itemSingle__arrows [data-id=" +
              response.ItemId +
              "], .userSingle__arrows [data-id=" +
              response.ItemId +
              "]"
          ).removeClass("selected-down-vote");
        } else {
          $(
            ".layout__vote-content [data-id=" +
              response.ItemId +
              "], .itemSingle__arrows [data-id=" +
              response.ItemId +
              "], .userSingle__arrows [data-id=" +
              response.ItemId +
              "]"
          ).addClass("selected-down-vote");
          $(
            ".layout__vote-content [data-id=" +
              response.ItemId +
              "], .itemSingle__arrows [data-id=" +
              response.ItemId +
              "], .iuserSingle__arrows [data-id=" +
              response.ItemId +
              "]"
          ).removeClass("selected-up-vote");
        }
        location.reload();
      });
    } else {
      $("#loginModal").modal("show");
    }
  });
});

$(".up-vote [data-id='1']").on("click", function(e) {
  console.this.addClass("selected-up-vote");
});
