import React from "react";
import styles from "./ConsultationComponent.module.scss";
import Link from "next/link";

const ConsultationComponent = () => {
  return (
    <section className={styles.contact} id="consultation">
      <div className={styles.container}>
        <div className={styles.contact__placeholder}>
          <h1>Let us help you</h1>
          {/* <div className={styles.contact__btn}>
            <Link href="/contact-us" className={styles.contact__link}>
              Book a consultation
            </Link>
          </div> */}
          <Link href="/contact-us">
            <button className={styles.contact__btn}>Book a consultation</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ConsultationComponent;
