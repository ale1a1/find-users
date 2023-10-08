const { DataTypes } = require("@sequelize/core");

const { sequelize } = require("./SequelizeConnection");

const FavouriteUser = sequelize.define("FavouriteUser", {
  owner: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  name: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  email: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  phoneNumber: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = { FavouriteUser };

//ignore this comment!!//
