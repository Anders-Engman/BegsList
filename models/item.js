module.exports = function(sequelize, DataTypes) {
  var Item = sequelize.define("Item", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    reason: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    itemURL: {
      type: DataTypes.STRING,
      validate: {
        isURL: true
      }
    }
  });
  return Item;
};