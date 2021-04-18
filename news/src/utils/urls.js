// URLS file to get all urls. 

const API_ENDPOINT_URL = "http://localhost:4000";
const GET_TOP_HEADLINES = "/v1/top-headlines";
const SEARCH_NEWS = "/v1/everything";

export const getTopheadlines = (category = "", page = 1) => {
  let searchParam = new URLSearchParams();
  if (category) searchParam.append("category", category);
  searchParam.append("page", page);
  return (
    (process.env.REACT_APP_API_URL || API_ENDPOINT_URL) +
    GET_TOP_HEADLINES + '?' +
    searchParam.toString()
  );
};

export const getSearchNews = (q, page = 1) => {
  let searchParam = new URLSearchParams();
  searchParam.append("q", q);
  searchParam.append("page", page);
  return (
    (process.env.REACT_APP_API_URL || API_ENDPOINT_URL) +
    SEARCH_NEWS  + '?' +
    searchParam.toString()
  );
};
