import React from "react";
import styles from "./DonateSection.module.scss";
import DonateForm from "@/components/DonateForm";
import classNames from "classnames";

const DonateSection = () => {
  return (
    <div className={styles.donate_section}>
      <div
        className={classNames(
          styles.container,
          styles.donate_section__placeholder
        )}
      >
        <h1 className={styles.donate_section__title}>
          Thank you for your decision to support our foundation
        </h1>
        <DonateForm />
      </div>
    </div>
  );
};

export default DonateSection;
