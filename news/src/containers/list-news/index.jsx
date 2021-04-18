import React, { useEffect, useState } from "react";
import List from "../../components/list";
import HttpHelper from "../../utils/http-helper";
import { getTopheadlines } from "../../utils/urls";
import styles from "./list-news.module.css";

const { getRequest } = new HttpHelper();
const allCategory = [
  "business",
  "entertainment",
  "general",
  // "health",
  "science",
  "sports",
  "technology",
];

// TOP-HEADLINE NEWSLIST PAGE

const ListNews = () => {
  const [newsList, setNewsList] = useState([]);
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    getTopHeadlineByApi(category, page);
  }, [category]);

  const onChangeHandler = (value) => {
    setCategory(value);
  };

  const getTopHeadlineByApi = async (
    categoryParam,
    pageParam,
    isAppendList = false
  ) => {
    let url = getTopheadlines(categoryParam, pageParam);
    try {
      const { data, error } = await getRequest({ url });
      if (!error) {
        let newsListTemp;
        if (isAppendList) {
          newsListTemp = [...newsList, ...data.articles];
        } else {
          newsListTemp = [...data.articles];
        }
        setNewsList(newsListTemp);
        setTotalResults(data.totalResults);
      }
    } catch (err) {
      console.error(err);
    }
  };
  const loadMore = () => {
    let newPage = page + 1;
    setPage((page) => page + 1);
    getTopHeadlineByApi(category, newPage, true);
  };

  const getListNews = () =>
    newsList.map((item, index) => (
      <List
        author={item.author}
        description={item.description}
        publishedAt={item.publishedAt}
        source={item.source}
        title={item.title}
        url={item.url}
        urlToImage={item.urlToImage}
        key={index}
      />
    ));
  return (
    <>
      <div>
        <div className={styles.custom_select} style={{ width: "200px" }}>
          <h3> Category: </h3>{" "}
          <select
            onChange={(e) => {
              onChangeHandler(e.target.value);
            }}
          >
            <option value={""}>Select</option>
            {allCategory.map((item, index) => (
              <option
                value={item}
                key={index}
                className={styles.option_first_letter}
              >
                {item}
              </option>
            ))}
          </select>
        </div>
        {getListNews()}
        {totalResults > newsList.length ? (
          <button
            className={styles.load_more}
            onClick={() => {
              loadMore();
            }}
          >
            {" "}
            LOAD MORE
          </button>
        ) : null}
      </div>
    </>
  );
};

export default ListNews;
