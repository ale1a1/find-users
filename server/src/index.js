const app = require("./App");
const { ModelSync } = require("./repository");

ModelSync.syncModel();

app();
