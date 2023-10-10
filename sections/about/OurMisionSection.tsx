"use client";
import React from "react";
import styles from "./OurMisionSection.module.scss";
import { useTranslations } from "next-intl";

const OurMisionSection=()=>{
    const t = useTranslations("about");
    return(
        <section className={styles.ourMisionSection}>
            <h2 className={styles.h2}>{t("ourMision")}</h2>
            <div className={styles.info}>
                <div className={styles.infoSection}>
                    <div className={styles.infoSection__head}>
                        <h3>Lorem Ipsum</h3>
                        <span className={styles.infoSection__head__number}>01</span>
                    </div>
                    <span className={styles.infoSection__span}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</span>
                </div>
                <div className={styles.infoSection}>
                    <div className={styles.infoSection__head}>
                        <h3>Lorem Ipsum</h3>
                        <span className={styles.infoSection__head__number}>02</span>
                    </div>
                    <span className={styles.infoSection__span}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</span>
                </div>
                <div className={styles.infoSection}>
                    <div className={styles.infoSection__head}>
                        <h3>Lorem Ipsum</h3>
                        <span className={styles.infoSection__head__number}>03</span>
                    </div>
                    <span className={styles.infoSection__span}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</span>
                </div>
                <div className={styles.infoSection}>
                    <div className={styles.infoSection__head}>
                        <h3>Lorem Ipsum</h3>
                        <span className={styles.infoSection__head__number}>04</span>
                    </div>
                    <span className={styles.infoSection__span}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</span>
                </div>
            </div>
        </section>
    )
}
export default OurMisionSection