$(document).ready(function() {
  $("#subButton").on("click", function(event) {
    event.preventDefault();
    var itemId = $(this).data().itemid;
    var commentText = $("#comTextArea");
    var dataToPass = { itemId: itemId, commmentText: commentText.val().trim() };
    $.post("/api/comments", dataToPass).then(function(response) {
      console.log(response);
    });
  });
});
