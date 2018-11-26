"use strict";

var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var basename = path.basename(module.filename);
var env = process.env.NODE_ENV || "development";
var config = require(__dirname + "/../config/config.json")[env];
var db = {};

if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  var sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

fs.readdirSync(__dirname)
  .filter(function(file) {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach(function(file) {
    var model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// db.User = require("./user.js")(sequelize, Sequelize);
// db.Item = require("./item.js")(sequelize, Sequelize);
// db.comment = require("./comment.js")(sequelize, Sequelize);
// db.vote = require("./vote.js")(sequelize, Sequelize);

// A User can: have many items, make many votes, make many comments
// db.user.hasMany(db.item);
// db.user.hasMany(db.vote);
// db.user.hasMany(db.comment);

// An item belongs to a user, has many comments, has many votes
// db.Item.belongsTo(db.User);
// db.item.hasMany(db.comment);
// db.Item.hasMany(db.Vote);

// A comment can belong to an item and to a user
// db.comment.belongsTo(db.item);
// db.comment.belongsTo(db.user);

// A vote can belong to an item and a user
// db.vote.belongsTo(db.item);
// db.vote.belongsTo(db.user);

module.exports = db;
