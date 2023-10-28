import React from "react";
import styles from "./HistoryComponent.module.scss";

interface HistoryProps {
  data: {
    year: string;
    location: string;
    title: string;
  };
}

const HistoryComponent: React.FC<HistoryProps> = ({ data }) => {
  return (
    <div className={styles.history_container}>
      <div className={styles.history_container__boxed}>
        <h3 className={styles.history_container__title}>Year</h3>
        <p>{data.year}</p>
      </div>
      <div className={styles.history_container__boxed}>
        <h3 className={styles.history_container__title}>Location</h3>
        <p>{data.location}</p>
      </div>
      <div className={styles.history_container__text_box}>
        {data.title.split("\n").map((item, index) => (
          <p className={styles.history_container__text} key={index}>
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

export default HistoryComponent;
