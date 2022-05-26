
require("dotenv").config();
const express = require("express");
const routes = require("./src/routes");
const sequelize = require("./src/config/database");

/*const sequelize = new Sequelize(process.env.POSTGRES_DB, process.env.POSTGRES_USER, process.env.POSTGRES_PASSWORD, {
  host: 'db',
  dialect: 'postgres'
});*/

 //we get the configuration from the config file/database
sequelize
  .sync({
    force: false,
  })
  .then(() => {
    console.log("Connection with database has been established sucessfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });

const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", routes);

//models
require("./src/models");

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
