const express = require("express");
const usersRoute = require("./user.route");
const workProfileRoute = require("./workProfile.route");
const authRoute = require("./auth.route");
const devLanguagesRoute = require("./devLanguages.route");
const toolRoute = require("./tool.route");
const getonboard = require("./getOnBoard.route")

const router = express.Router();

const defaultRoutes = [
  {
    path: "/users",
    route: usersRoute,
  },
  {
    path: "/work-profiles",
    route: workProfileRoute,
  },
  {
    path: "/auth",
    route: authRoute,
  },
  {
    path: "/devlanguages",
    route: devLanguagesRoute,
  },
  {
    path: "/tools",
    route: toolRoute,
  },
  {
    path: "/getonboard",
    route: getonboard,
  },
];

for (const route of defaultRoutes) {
  router.use(route.path, route.route);
}

module.exports = router;
