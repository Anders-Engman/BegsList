var signUpUsername = $(".signup-form-username");
var signUpPassword = $(".signup-form-password");
var signUpBio = $(".signup-form-bio");
var signUpName = $(".signup-form-name");
var signUpImgurl = $("#signup-form-imgurl");
var signUpSubmit = $("#signup-form-submit");
var logInUsername = $(".login-form-username");
var logInPassword = $(".login-form-password");
var logInSubmit = $(".login-form-submit");
// var signUpLink = $(".signup-button");
// var logInLink = $(".login-button");
var modalObscure = $(".modal-obscure");
var loginModal = $(".layout__login-modal");
var signUpModal = $(".layout__signup-modal");
$(document).ready(function() {
  var newUserImageUrl = "";
  signUpSubmit.on("click", function(e) {
    e.preventDefault();
    // TODO client side input validation
    var newUserData = new FormData();
    newUserData.append("userName", signUpUsername.val().trim());
    newUserData.append("password", signUpPassword.val().trim());
    newUserData.append("bio", signUpBio.val().trim());
    newUserData.append("name", signUpName.val().trim());
    newUserData.append("imageURL", signUpUsername.val().trim());
  });
  // handler for new user modal submit button
  signUpImgurl.on("change", function(e) {
    e.preventDefault();
    signUpSubmit.addClass("disabled");
    console.log(signUpImgurl[0].files[0]);
    var newUserPic = new FormData();
    newUserPic.append("file", signUpImgurl[0].files[0]);
    $.ajax({
      url: "/api/upload",
      method: "post",
      data: newUserPic,
      // async: false,
      // cache: false,
      contentType: false,
      processData: false,
      success: function(response) {
        console.log(response.file);
        signUpSubmit.removeClass("disabled");
      },
      error: function() {
        alert("error in ajax form submission");
      }
    });

    // $.post("/api/sign-up", userData).then(function(data) {
    //   console.log(data);
    //   $.post("/api/log-in", {
    //     userName: data.userName,
    //     password: userData.password
    //   }).then(function(data) {
    //     console.log(data);
    //     window.location.replace(data);
    //   });
    // });
  });
  // handler for login modal submit button
  logInSubmit.on("click", function(e) {
    e.preventDefault();
    $.post("/api/log-in", {
      userName: logInUsername.val().trim(),
      password: logInPassword.val().trim()
    })
      .then(function(data) {
        console.log(data);
        window.location.replace(data);
      })
      .catch(function(err) {
        console.log(err);
      });
  });
  // signUpLink.on("click", function(e) {
  //   e.preventDefault();
  //   modalObscure.css("display", "grid");
  //   signUpModal.css("display", "block");
  // });

  // logInLink.on("click", function(e) {
  //   e.preventDefault();
  //   modalObscure.css("display", "grid");
  //   loginModal.css("display", "block");
  // });
  $(window).keydown(function(e) {
    if (e.keyCode === 27) {
      console.log("Excape!");
      modalObscure.css("display", "none");
      signUpModal.css("display", "none");
      loginModal.css("display", "none");
    }
  });
});
