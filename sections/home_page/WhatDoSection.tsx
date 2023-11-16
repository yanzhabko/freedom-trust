import React from "react";
import styles from "./WhatDoSection.module.scss";
import { PiHandHeart } from "react-icons/pi";
import { GoPeople } from "react-icons/go";
import { HiOutlineBookOpen } from "react-icons/hi";
import classNames from "classnames";
import { canDoData } from "@/lib/data";

const WhatDoSection = () => {
  return (
    <section className={styles.what}>
      <div className={classNames(styles.what__container, styles.container)}>
        <h1 className={styles.what__title}>What You Can Do</h1>
        <div className={styles.what__list}>
          {canDoData.map((item, index) => (
            <div key={index} className={styles.what__list__item}>
              <div className={styles.what__list__container}>
                <div className={styles.what__icon}>{item.icon}</div>
                <h2 className={styles.what__list__title}>{item.title}</h2>
              </div>
              <p className={styles.what__title}>{item.description}</p>
            </div>
          ))}
          {/* <div className={styles.what__list__item}>
            <div className={styles.what__list__container}>
              <PiHandHeart className={styles.what__icon} />
              <div className={styles.what__list__title}>Donate</div>
            </div>
            <p className={styles.what__title}>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
          <div className={styles.what__list__item}>
            <div className={styles.what__list__container}>
              <GoPeople className={styles.what__icon} />
              <div className={styles.what__list__title}>Visit</div>
            </div>
            <p className={styles.what__title}>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
          <div className={styles.what__list__item}>
            <div className={styles.what__list__container}>
              <HiOutlineBookOpen className={styles.what__icon} />
              <div className={styles.what__list__title}>Fill the form</div>
            </div>
            <p className={styles.what__title}>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div> */}
        </div>
      </div>
      <div className={styles.line}></div>
    </section>
  );
};

export default WhatDoSection;
