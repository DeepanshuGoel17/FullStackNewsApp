import React, { useState } from "react";
import Header from "../../components/header";
import ListNews from "../list-news";
import FilterListNews from "../list-news-filter";
// Home Page 
const Home = () => {
  const [filter, setFiler] = useState("");

  return (
    <>
      <Header filter={filter} setFilter={setFiler} />

      {filter == "" ? <ListNews /> : <FilterListNews q={filter} />}
    </>
  );
};

export default Home;
