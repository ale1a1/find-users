const express = require("express");

const cors = require("cors");
const bodyParser = require("body-parser");

const UserRouter = require("./router/UserRouter");

const app = express();

module.exports = () => {
  app.use(cors());

  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: false }));

  // parse application/json
  app.use(bodyParser.json());

  app.use("/user", UserRouter);

  app.listen(3001, () =>
    console.log("API is running on http://localhost:3001")
  );
};
