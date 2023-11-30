import DonateSection from "@/sections/donate_page/DonateSection";
import React from "react";
import styles from "./page.module.scss";

const Donate = () => {
  return (
    <section className={styles.wrapper}>
      <DonateSection />
    </section>
  );
};

export default Donate;
