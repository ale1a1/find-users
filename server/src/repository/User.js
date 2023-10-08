const { DataTypes } = require("@sequelize/core");

const { sequelize } = require("./SequelizeConnection");

const User = sequelize.define("User", {
  name: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  email: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  password: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  phoneNumber: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = { User };
