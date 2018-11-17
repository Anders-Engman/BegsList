var signUpUsername = $(".signup-form-username");
var signUpPassword = $(".signup-form-password");
var signUpBio = $(".signup-form-bio");
var signUpName = $(".signup-form-name");
var signUpImgurl = $(".signup-form-imgurl");
var signUpSubmit = $(".signup-form-submit");
var logInUsername = $(".login-form-username");
var logInPassword = $(".login-form-password");
var logInSubmit = $(".login-form-submit");
var signUpLink = $(".signup-button");
var logInLink = $(".login-button");
var modalObscure = $(".modal-obscure");
var loginModal = $(".layout__login-modal");
var signUpModal = $(".layout__signup-modal");
$(document).ready(function() {
  signUpSubmit.on("click", function(e) {
    e.preventDefault();
    $.post("/api/sign-up", {
      userName: signUpUsername.val().trim(),
      password: signUpPassword.val().trim(),
      bio: signUpBio.val().trim(),
      name: signUpName.val().trim(),
      image: signUpImgurl.val().trim()
    }).then(function(data) {
      console.log(data);
    });
  });
  logInSubmit.on("click", function(e) {
    e.preventDefault();
    $.get("/api/log-in", {
      userName: logInUsername.val().trim(),
      password: logInPassword.val().trim()
    }).then(function(data) {
      console.log(data);
    });
  });
  signUpLink.on("click", function(e) {
    e.preventDefault();
    modalObscure.css("display", "grid");
    signUpModal.css("display", "grid");
  });

  logInLink.on("click", function(e) {
    e.preventDefault();
    modalObscure.css("display", "grid");
    loginModal.css("display", "grid");
  });
  $(window).keydown(function(e) {
    if (e.keyCode === 27) {
      console.log("Excape!");
      modalObscure.css("display", "none");
      signUpModal.css("display", "none");
      loginModal.css("display", "none");
    }
  });
});
