"use client";
import React, { useRef, useState } from "react";
import styles from "./HistorySection.module.scss";
import classNames from "classnames";
import HistoryComponent from "@/components/HistoryComponent";
import historyData from "@/date/history.json";

type DataProp = {
  year: string;
  location: string;
  title: string;
};

const HistorySection = () => {
  const [showMore, setShowMore] = useState(false);
  const data: { [key: string]: DataProp } = historyData;

  const scrollToSection = () => {
    document.getElementById("history")?.scrollIntoView();
    setShowMore(!showMore);
  };

  return (
    <section className={styles.history} id="history">
      <div className={classNames(styles.container)}>
        <div className={styles.history__container}>
          {showMore ? (
            Object.keys(data).map((keys) => (
              <HistoryComponent key={keys} data={data[keys]} />
            ))
          ) : (
            <HistoryComponent data={data["1"]} />
          )}
          {Object.keys(data).length === 2 && (
            <button
              className={styles.history__btn}
              onClick={() => scrollToSection()}
            >
              {!showMore ? "show more" : "less more"}
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
