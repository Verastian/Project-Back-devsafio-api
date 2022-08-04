const express = require("express");
const usersRoute = require("./user.route");
const workProfileRoute = require("./workProfile.route");
const authRoute = require("./auth.route");
const ToolRoute = require("./Tool.route");

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
    path: "/tool",
    route: ToolRoute,
  },
];

for (const route of defaultRoutes) {
  router.use(route.path, route.route);
}

module.exports = router;
