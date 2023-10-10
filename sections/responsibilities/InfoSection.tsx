"use client";
import React from "react";
import styles from "./InfoSection.module.scss";
import { useTranslations } from "next-intl";


const InfoSection = () => {
  const t = useTranslations("responsibilities");
  return (
    <section className={styles.textConteiner}>
      <div>
        <div className={styles.textConteiner__text}>
          {t("firstParagraph")}
        </div>
        <div className={styles.textConteiner__text}>
          {t("secondParagraph")}
        </div>
        <div className={styles.textConteiner__text}>
          {t("thirsdParagraph")}
        </div>
      </div>
    </section>
  );
};

export default InfoSection;