const { DataTypes } = require("@sequelize/core");

const { sequelize } = require("./SequelizeConnection");

const FavouriteUser = sequelize.define("FavouriteUser", {
  owner: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = { FavouriteUser };

//ignore this comment!!//
