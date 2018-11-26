var signUpUsername = $(".signup-form-username");
var signUpPassword = $(".signup-form-password");
var signUpBio = $(".signup-form-bio");
var signUpName = $(".signup-form-name");
var signUpImgurl = $("#signup-form-imgurl");
var signUpSubmit = $(".signup-form-submit");
var logInUsername = $(".login-form-username");
var logInPassword = $(".login-form-password");
var logInSubmit = $(".login-form-submit");
// var signUpLink = $(".signup-button");
// var logInLink = $(".login-button");
var modalObscure = $(".modal-obscure");
var loginModal = $(".layout__login-modal");
var signUpModal = $(".layout__signup-modal");
$(document).ready(function() {
  // handler for new user modal submit button
  signUpSubmit.on("click", function(e) {
    e.preventDefault();
    console.log(signUpImgurl[0].files[0]);
    var userData = new FormData();
    userData.append("file", signUpImgurl[0].files[0]);
    // var tmpdat = {
    //   userName: signUpUsername.val().trim(),
    //   password: signUpPassword.val().trim(),
    //   bio: signUpBio.val().trim(),
    //   name: signUpName.val().trim(),
    //   image: signUpImgurl
    // };
    $.ajax({
      url: "/api/upload",
      method: "post",
      data: userData,
      // async: false,
      // cache: false,
      contentType: false,
      processData: false,
      success: function() {
        alert("Form Submitted!");
      },
      error: function() {
        alert("error in ajax form submission");
      }
    }).then(function(response) {
      console.log(response);
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
