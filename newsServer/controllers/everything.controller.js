const axios = require("axios");

// Initilizing the NewAPI nodejs Package
const NewsAPI = require("newsapi");
const newsapi = new NewsAPI(
  process.env.NEWS_API || "6c21c28924b14d0483b44ab40392725f"
);

const pick = require("../utils/pick");

/**
 * 
 * @param {req} req Request object
 * @param {res} res Response Object
 * To get the news by the filters
 */


const getNewsByFilter = async (req, res) => {
  const { q } = pick(req.query, ["q"]);
  const { page } = pick(req.query, ["page"]);
  let reqObj = {
    q,
    language: "en",
    sortBy: "relevancy", // sorting by the relevancy of the topic
    page: page || 1,
  };
  newsapi.v2.everything(reqObj).then((response) => {
    res.status(200).send({ ...response });
  });
};

module.exports = {
  getNewsByFilter,
};
