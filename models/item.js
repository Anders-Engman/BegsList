module.exports = function(sequelize, DataTypes) {
  var Item = sequelize.define("Item", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    reason: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    itemURL: {
      type: DataTypes.STRING,
      validate: {
        isURL: true
      }
    },
    imageURL: {
      type: DataTypes.STRING,
      validate: {
        isURL: true
      }
    }
  });

  Item.associate = function(models) {
    // Associating Item with Posts
    // When an Item is deleted, also delete any associated Posts
    Item.belongsTo(models.User, {});
    Item.hasMany(models.Vote, {});
    Item.hasMany(models.BegComment, {});
  };
  return Item;
};
