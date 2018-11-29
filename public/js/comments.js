$(document).ready(function() {
  $("#subButton").on("click", function(event) {
    event.preventDefault();
    var itemId = $(this).data("item-id");
    var commentText = $("#user-comment-box").val();
    console.log(itemId, commentText);
    var dataToPass = { ItemId: itemId, text: commentText };
    $.post("/api/comments", dataToPass).then(function(response) {
      console.log(response);
      if (!response) {
        $("#loginModal").modal("show");
      } else {
        location.reload();
      }
    });
  });
});
