require("dotenv").config();
const express = require("express");
// const sequelize = require("./src/config/config");
const cors = require("cors");

const routes = require("./src/routes/");

// TODO: use Sequalize Migrations instead of forcing
/* sequelize
  .sync({
    force: false,
  })
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  }); */

const app = express();

// cors config
var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  allowedHeaders: 'Content-Type,Authorization'
}

app.use(cors(corsOptions));

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", routes);

app.get("/", function (_req, res) {
  res.send({
    name: "Devsafio API",
    environment: process.env.NODE_ENV,
  });
});

app.get("/ping", function (_req, res) {
  res.send("pong");
});

/* istanbul ignore if */
//*This means: Run app.listen(8080) only if you are running the file
if (!module.parent) {
  const server = app.listen(process.env.PORT, function () {
    const port = server.address().port;
    console.log("Example app listening at http://localhost:%s", port);
  });
}

module.exports = app;
