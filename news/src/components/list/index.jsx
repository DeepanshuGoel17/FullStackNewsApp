import React from "react";
import styles from "./list.module.css";

//  LIST item of the news. 

const List = ({
  title,
  description,
  source,
  urlToImage,
  url,
  publishedAt,
  author,
}) => {
  return (
    <>
      <div className={styles.list_wrapper}>
        <div className={styles.content_wrapper}>
          <h3 className={styles.title}>{title}</h3>
          <h4 className={styles.description}>{description}</h4>
          <div className={styles.author}>
            By: {author} | {source.name}
          </div>
          <div className={styles.publish}>
            At: {new Date(publishedAt).toLocaleString()}
          </div>
          <div className={styles.link_to_article}>
            <a href={url} target="_blank" className={styles.link_to_article}>
              View Full article
            </a>
          </div>
        </div>
        <div className={styles.image_wrapper}>
          <img src={urlToImage} className={styles.image} />
        </div>
      </div>
    </>
  );
};
export default List;
