module.exports = function(sequelize, DataTypes) {
  var Vote = sequelize.define("Vote", {
    upVote: {
      type: DataTypes.INTEGER,
      validate: {
        max: 1,
        isNumeric: true
      }
    },
    downVote: {
      type: DataTypes.INTEGER,
      validate: {
        max: 1,
        isNumeric: true
      }
    }
  });

  // Vote.associate = function(models) {
  //   // Associating Vote with Items
  //   Vote.belongsTo(models.Item, {});
  //   Vote.belongsTo(models.User, {});
  // };
  return Vote;
};
