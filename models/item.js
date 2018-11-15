module.exports = function (sequelize, DataTypes) {
  var Item = sequelize.define("Item", {
    itemName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    itemReason: {
      type: DataTypes.TEXT,
      allowNull: true,
      validate: {
        len: [1]
      }
    },
    itemURL: {
      type: DataTypes.STRING,
      validate: {
        isUrl: true
      }
    }
  });
  return Item;
};