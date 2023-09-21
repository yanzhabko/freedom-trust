import React from "react";
import styles from "./DonateSection.module.scss";
import Link from "next/link";
import classNames from "classnames";

const DonateSection = () => {
  return (
    <section className={styles.donate}>
      <div className={classNames(styles.donate__container , styles.container)}>
        <div className={styles.donate__images_container}>
          <div className={styles.donate__images}></div>
        </div>
        <div className={styles.donate__box}>
          <h1>Who we are?</h1>
          <p className={styles.donate__text}>
            Who wIt is a long established fact that a reader will be distracted
            by the readable content of a page when looking at its layout. The
            point of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.e are?
          </p>
          <div className={styles.donate__btn}>
            <Link href="/donate" className={styles.donate__btn__link}>
              Donate now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonateSection;
