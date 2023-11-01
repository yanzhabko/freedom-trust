import React from "react";
import styles from "./NewsSection.module.scss";
import NewsCardComponent from "@/components/NewsCardComponent";
import news from "@/date/news.json";
import classNames from "classnames";
import Link from "next/link";

type DataProp = {
  link: string;
  images: string;
  date: string;
  title: string;
};

const NewsSection = () => {
  const data: { [key: string]: DataProp } = news;

  return (
    <section className={styles.news}>
      <div className={classNames(styles.container, styles.news__container)}>
        <h1 className={styles.news__title}>Latest News</h1>
        <div className={styles.news__card_container}>
          {Object.keys(data)
            .slice(0, 3)
            .map((keys) => (
              <NewsCardComponent key={keys} data={data[keys]} />
            ))}
        </div>
        <Link className={styles.news__link} href="/about/news">
          Show more
        </Link>
      </div>
    </section>
  );
};

export default NewsSection;
