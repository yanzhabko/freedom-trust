"use client";
import React from "react";
import styles from "./MissionSection.module.scss";
import BoxComponent from "@/components/BoxComponent";
import classNames from "classnames";
import SliderComponent from "@/components/SliderComponent";
import { missionDate } from "@/lib/data";

const MissionSection = () => {
  return (
    <section className={styles.mission} id="mission">
      <div className={classNames(styles.container, styles.mission__container)}>
        <h1 className={styles.mission__title}>Our mission</h1>
        <div className={styles.mission__desktop}>
          <div className={styles.mission__box}>
            {missionDate.map((item, index) => (
              <BoxComponent key={index} data={item} />
            ))}
          </div>
          <div className={styles.mission__line_first}></div>
          <div className={styles.mission__line_second}></div>
          <div className={styles.mission__line_third}></div>
        </div>
      </div>
      <div className={styles.mobile_slider}>
        <SliderComponent data={missionDate} BoxComponent={BoxComponent} />
      </div>
    </section>
  );
};

export default MissionSection;
