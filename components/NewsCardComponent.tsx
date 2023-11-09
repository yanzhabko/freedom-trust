import React from "react";
import styles from "./NewsCardComponent.module.scss";
import Image from "next/image";
import Link from "next/link";

interface NewsProps {
  data: {
    link: string;
    images: string;
    date: string;
    title: string;
  };
}

const NewsCardComponent: React.FC<NewsProps> = ({ data }) => {
  return (
    <Link href={data.link} target="_blank" className={styles.card}>
      <Image src={data.images} width={400} height={210} alt="News picture" className={styles.card__images} />
      <p className={styles.card__date}>{data.date}</p>
      <h3 className={styles.card__title}>{data.title}</h3>
    </Link>
  );
};

export default NewsCardComponent;
