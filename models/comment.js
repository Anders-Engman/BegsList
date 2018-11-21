module.exports = function(sequelize, DataTypes) {
  var BegComment = sequelize.define("Comment", {
    text: DataTypes.TEXT
  });

  BegComment.associate = function(models) {
    // Associating BegComment with User and the post
    BegComment.belongsTo(models.User, {});
    BegComment.belongsTo(models.Item, {});
  };
  return BegComment;
};
