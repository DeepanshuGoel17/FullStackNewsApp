const express = require('express');

const router = express.Router();
const newsController = require("../../controllers/everything.controller");

router.get("/", newsController.getNewsByFilter);

module.exports = router;
