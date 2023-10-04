const { Sequelize } = require("@sequelize/core");

const { databaseConfig, databaseURI } = require("../config/Config");
let sequelize;
if(databaseURI) {
  sequelize = new Sequelize(databaseURI);
} else {
  sequelize = new Sequelize({
    dialect: databaseConfig.dialect,
    host: databaseConfig.host,
    username: databaseConfig.username,
    password: databaseConfig.password,
    port: databaseConfig.port,
    database: databaseConfig.database,
});
}

module.exports = { sequelize };

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established.");
  } catch (error) {
    console.error("Unable to connect to the database", error);
  }
}
