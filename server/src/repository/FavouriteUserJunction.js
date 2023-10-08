const { DataTypes } = require("@sequelize/core");

const { sequelize } = require("./SequelizeConnection");

const FavouriteUserJunction = sequelize.define("FavouriteUserJunction", {
  ownerID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  favUserID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = { FavouriteUserJunction };

//ignore this comment!!//
