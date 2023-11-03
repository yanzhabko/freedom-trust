import React from "react";
import styles from "./BoxComponent.module.scss";

interface BoxProps {
  title?: string;
  number?: string;
  text?: string;
}

const BoxComponent: React.FC<{ data: BoxProps }> = ({ data }) => {
  const { title, number, text } = data;
  return (
    <div className={styles.box}>
      <div className={styles.box__container}>
        <h3 className={styles.box__title}>{title}</h3>
        <p className={styles.box__number}>{number}</p>
      </div>
      <p className={styles.box__text}>{text}</p>
    </div>
  );
};

export default BoxComponent;
