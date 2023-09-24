import React from "react";
import Image from 'next/image';
import styles from "./NewsSection.module.scss";
import news from "@/images/about/news.png"

const NewsSecrion=()=>{
    return(
        <section className={styles.newsContainer}>
            <h2 className={styles.h2}>Останні новини</h2>
            <div className={styles.allNews}>
                <a href="#" className={styles.alink}>
                    <div className={styles.news}>
                        <Image src={news} alt="aa" className={styles.news__image}/>
                        <span className={styles.span}>23.06.2023</span>
                        <h3 className={styles.h3}>Евакуйовано 5 людей з херснощини</h3>
                    </div>
                </a>
                <a href="#" className={styles.alink}>
                    <div className={styles.news}>
                        <Image src={news} alt="aa" className={styles.news__image}/>
                        <span className={styles.span}>23.06.2023</span>
                        <h3 className={styles.h3}>Евакуйовано 5 людей з херснощини</h3>
                    </div>
                </a>
                <a href="#" className={styles.alink}>
                    <div className={styles.news}>
                        <Image src={news} alt="aa" className={styles.news__image}/>
                        <span className={styles.span}>23.06.2023</span>
                        <h3 className={styles.h3}>Евакуйовано 5 людей з херснощини</h3>
                    </div>
                </a>
            </div>
            <a href="#"><h3  className={styles.link}>Показати ще</h3></a>
        </section>
    )
}
export default NewsSecrion