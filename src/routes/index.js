const express = require("express");
const usersRoute = require("./user.route");
const workProfileRoute = require("./workProfile.route");

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
];

for (const route of defaultRoutes) {
  router.use(route.path, route.route);
}

module.exports = router;
