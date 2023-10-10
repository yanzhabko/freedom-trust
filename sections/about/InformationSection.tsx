"use client";
import React from "react";
import styles from "./InformationSection.module.scss";
import { useTranslations } from "next-intl";

const InformationSection=()=>{
    const t = useTranslations("about");
    return(
        <section className={styles.infoConteiner}>
                <div className={styles.infoConteiner__infoSection}>
                    <div className={styles.infoConteiner__infoSection__year}>
                        <span className={styles.infoConteiner__head}>{t("yearOfFoundation")}</span>
                        <span className={styles.infoConteiner__info}>{t("year")}</span>
                    </div>
                    <div className={styles.infoConteiner__infoSection__location}>
                        <span className={styles.infoConteiner__head}>{t("location")}</span>
                        <span className={styles.infoConteiner__info}>{t("locationCity")}</span>
                    </div>
                    <div className={styles.infoConteiner__infoSection__text}>
                        <p>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                        </p>
                        <p>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                        </p>
                        <p>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                        </p>
                    </div>
                </div>
        </section>
    )
}

export default InformationSection;