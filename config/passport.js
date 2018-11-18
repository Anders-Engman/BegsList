var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

var db = require("../models");

passport.use(
  new LocalStrategy(
    {
      usernameField: "userName"
    },
    function(userName, password, done) {
      console.log(userName, password);
      db.User.findOne({ where: { userName: userName } }).then(function(dbUser) {
        if (!dbUser) {
          return done(null, false, {
            message: "Incorrect Username"
          });
        } else if (!dbUser.validPassword(password)) {
          return done(null, false, { message: "Incorrect Password" });
        }
        return done(null, dbUser);
      });
    }
  )
);
passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

// Exporting our configured passport
module.exports = passport;
