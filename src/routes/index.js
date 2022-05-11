const express = require('express');
const postRoute = require('./post.route');

const router = express.Router();

const defaultRoutes = [
    {
        path: '/posts',
        route: postRoute
    }
];

for (const route of defaultRoutes) {
    router.use(route.path, route.route);
}

module.exports = router;

