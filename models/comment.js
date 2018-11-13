module.exports = function(sequelize, DataTypes) {
  var BegComment = sequelize.define("Comment", {
    text: DataTypes.TEXT,
  });
  return BegComment;
};
