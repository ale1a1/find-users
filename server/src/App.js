const express = require("express");

const cors = require("cors");
const bodyParser = require("body-parser");

const UserRouter = require("./router/UserRouter");

const app = express();

const PORT = 3001;

module.exports = () => {
  app.use(cors());

  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: false }));

  // parse application/json
  app.use(bodyParser.json());

  app.use("/user", UserRouter);

  app.listen(process.env.PORT || PORT, () =>
    console.log("API is running on http://localhost:3001")
  );

  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://find-users-app.netlify.app');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });
};
