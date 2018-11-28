$(document).ready(function() {
  $("#subButton").on("click", function(event) {
    event.preventDefault();
    var userId = $(".layout__main-container").data("user-id");
    var commentText = $("#comTextArea");

    $.ajax({
      url: "/api/comments/",
      method: "POST",
      data: {
        userId: userId,
        commmentText: commentText.val().trim()
      }
    }).then(function(response) {
      console.log(response);
    });
  });
});
