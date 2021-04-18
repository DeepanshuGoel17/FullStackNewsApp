const express = require('express');

const router = express.Router();
const newsController = require('../../controllers/news.controller');

router.get('/', newsController.getTopHeadlines);

module.exports = router;
