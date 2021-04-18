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
 * To Get the top headlines for the UK 
 */

const getTopHeadlines = async (req, res) => {
  const { category } = pick(req.query, ["category"]) || "";
  const { page } = pick(req.query, ["page"]);

  let reqObj = {
    language: "en",
    country: "gb",       // country code for UK 
    page: page || 1,
  };
  if (category) {
    reqObj.category = category;
  }
  newsapi.v2.topHeadlines(reqObj).then((response) => {
    res.status(200).send({ ...response });
  });
};

module.exports = {
  getTopHeadlines,
};
