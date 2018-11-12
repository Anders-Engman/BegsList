module.exports = function(sequelize, DataTypes) {
  var Vote = sequelize.define("Vote", {
    upVote: DataTypes.INTEGER,
    downVote: DataTypes.INTEGER,
  });
  return Vote;
};
