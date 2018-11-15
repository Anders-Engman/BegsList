module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    bio: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    image: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    begScore: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 2.5
    },
    userName: {
      type: DataTypes.TEXT
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    last_login: {
      type: DataTypes.DATE
    },
    status: {
      type: DataTypes.ENUM("active", "inactive"),
      defaultValue: "active"
    }
  });

  User.associate = function(models) {
    // Associating User with Items
    User.hasMany(models.Item, {});
  };
  return User;
};
