module.exports = function(sequelize, DataTypes) {
  var Vote = sequelize.define("Vote", {
    voteValue: {
      type: DataTypes.INTEGER,
      validate: {
        allowNull: false,
        isValidVote(value) {
          if (Math.abs(value) !== 1) {
            throw new Error(
              "UpVote/DownVote value must have an absolute value of 1"
            );
          }
        }
      }
    }
  });

  Vote.associate = function(models) {
    // Associating Vote with Items
    Vote.belongsTo(models.Item, {});
    Vote.belongsTo(models.User, {});
  };
  return Vote;
};
