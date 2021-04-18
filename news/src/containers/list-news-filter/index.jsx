import React, { useEffect, useState } from "react";
import List from "../../components/list";
import HttpHelper from "../../utils/http-helper";
import { getSearchNews } from "../../utils/urls";
import styles from "./list-news.module.css";
import { debounce } from "../../utils/debounce";
const { getRequest } = new HttpHelper();

// FILTER LIST NEWS
const ListNewsFilter = ({ q }) => {
  const [newsList, setNewsList] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    debounce(getNewsSearchRequest, 500, [q, page]);
  }, [q]);

  const getNewsSearchRequest = async (q, pageParam, isAppendList = false) => {
    let url = getSearchNews(q, pageParam);
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
    getNewsSearchRequest(q, newPage, true);
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

export default ListNewsFilter;
