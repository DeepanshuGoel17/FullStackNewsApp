import React from "react";
import styles from "./header.module.css";

// HEADER FOR THE APP
 
const Header = ({ filter, setFilter }) => {
  const onChangeHandler = (value) => {
    setFilter(value)
  };
  return (
    <React.Fragment>
      <header className={styles.main_header}>
        <div className={styles.header_wrapper}>
          <div className={styles.logo_headline_wrapper}>
            <h3>UK TOP-HEADLINES</h3> <h2>My News Logo</h2>
          </div>
          <div className={styles.seach_box_wrapper}>
            <input
              value={filter}
              onChange={(e) => {
                onChangeHandler(e.target.value);
              }}
              className={styles.search_input}
              placeholder={"Search for topics"}
            ></input>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
