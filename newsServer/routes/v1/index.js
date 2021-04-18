const express = require('express');
const newsRoute = require('./news.route');
const everythingRoute = require('./everything.route');


const router = express.Router();

// defining the routes over here

const defaultRoutes = [
  {
    path: '/top-headlines',
    route: newsRoute,
  },
  {
    path: '/everything',
    route: everythingRoute,
  },
  
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
