"use client";
import React from "react";
import Image from 'next/image';
import styles from "./NewsSection.module.scss";
import news from "@/images/about/news.png"
import Link from "next/link";
import { useTranslations } from "next-intl";

const NewsSection=()=>{
    const t = useTranslations("about");
    return(
        <section className={styles.newsContainer}>
            <h2 className={styles.h2}>{t("news")}</h2>
            <div className={styles.allNews}>
                <Link href="#" className={styles.alink}>
                    <div className={styles.news}>
                        <Image src={news} alt="aa" className={styles.news__image}/>
                        <span className={styles.span}>23.06.2023</span>
                        <h3 className={styles.h3}>Евакуйовано 5 людей з херснощини</h3>
                    </div>
                </Link>
                <Link href="#" className={styles.alink}>
                    <div className={styles.news}>
                        <Image src={news} alt="aa" className={styles.news__image}/>
                        <span className={styles.span}>23.06.2023</span>
                        <h3 className={styles.h3}>Евакуйовано 5 людей з херснощини</h3>
                    </div>
                </Link>
                <Link href="#" className={styles.alink}>
                    <div className={styles.news}>
                        <Image src={news} alt="aa" className={styles.news__image}/>
                        <span className={styles.span}>23.06.2023</span>
                        <h3 className={styles.h3}>Евакуйовано 5 людей з херснощини</h3>
                    </div>
                </Link>
            </div>
            <Link href="#"><h3  className={styles.link}>{t("loadMore")}</h3></Link>
        </section>
    )
}
export default NewsSection;