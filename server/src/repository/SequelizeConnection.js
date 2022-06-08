const { Sequelize } = require("@sequelize/core");

const { databaseConfig } = require("../config/Config");

const sequelize = new Sequelize({
  dialect: databaseConfig.dialect,
  host: databaseConfig.host,
  username: databaseConfig.username,
  password: databaseConfig.password,
  port: databaseConfig.port,
  database: databaseConfig.database,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

module.exports = { sequelize };

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established.");
  } catch (error) {
    console.error("Unable to connect to the database", error);
  }
}
