var signUpUsername = $(".signup-form-username");
var signUpPassword = $(".signup-form-password");
var signUpBio = $(".signup-form-bio");
var signUpName = $(".signup-form-name");
var signUpImgurl = $(".signup-form-imgurl");
var signUpSubmit = $(".signup-form-submit");
var logInUsername = $(".login-form-username");
var logInPassword = $(".login-form-password");
var logInSubmit = $(".login-form-submit");
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
    // $.get("/api/log-in", {
    //   username: logInUsername.val().trim(),
    //   password: logInPassword.val().trim()
    // }).then(function(data) {
    //   console.log(data);
    // });
  });
});
