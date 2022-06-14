require("dotenv").config();
const express = require("express");
const sequelize = require("./src/config/database");

const routes = require("./src/routes/");

sequelize
  .sync({
    force: false,
  })
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });

const app = express();

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
  const server = app.listen(process.env.APP_PORT, function () {
    const port = server.address().port;
    console.log("Example app listening at http://localhost:%s", port);
  });
}

module.exports = app;
