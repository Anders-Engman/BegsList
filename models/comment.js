module.exports = function(sequelize, DataTypes) {
  var BegComment = sequelize.define("BegComment", {
    text: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  });

  BegComment.associate = function(models) {
    // Associating BegComment with User and the post
    BegComment.belongsTo(models.User, {
      // foreignKey: "UserId"
    });
    BegComment.belongsTo(models.Item, {});
  };
  return BegComment;
};
