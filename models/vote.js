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
  return Vote;
};
