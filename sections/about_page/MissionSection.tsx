import React from "react";
import styles from "./MissionSection.module.scss";
import BoxComponent from "@/components/BoxComponent";
import classNames from "classnames";

const MissionSection = () => {
  return (
    <section className={styles.mission}>
      <div className={classNames(styles.container, styles.mission__container)}>
        <h1 className={styles.mission__title}>Our mission</h1>
        <div className={styles.mission__box}>
          <BoxComponent
            title="Lorem ispum"
            number="01"
            text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout"
          />
          <BoxComponent
            title="Lorem ispum"
            number="02"
            text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout"
          />
          <BoxComponent
            title="Lorem ispum"
            number="03"
            text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout"
          />
          <BoxComponent
            title="Lorem ispum"
            number="04"
            text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout"
          />
        </div>
				<div className={styles.mission__line_first}></div>
				<div className={styles.mission__line_second}></div>
				<div className={styles.mission__line_third}></div>
      </div>
    </section>
  );
};

export default MissionSection;
