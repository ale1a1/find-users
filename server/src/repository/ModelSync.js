const { sequelize } = require("./SequelizeConnection");
const { User } = require("./User");

async function syncModel() {
  await sequelize.sync();
  console.log("All models were synchronized.");
}

module.exports.ModelSync = { syncModel };
