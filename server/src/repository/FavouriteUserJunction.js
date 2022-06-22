const { DataTypes } = require("@sequelize/core");

const { sequelize } = require("./SequelizeConnection");

const FavouriteUserJunction = sequelize.define("FavouriteUserJunction", {
  ownerID: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  favUserID: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = { FavouriteUserJunction };

//ignore this comment!!//
