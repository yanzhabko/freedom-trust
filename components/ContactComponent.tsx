import React from "react";
import styles from "./ContactComponent.module.scss";
import Link from "next/link";

const ContactComponent = () => {
  return (
    <section className={styles.contact} id="contact">
      <div className={styles.container}>
        <div className={styles.contact__placeholder}>
          <h1>Let us help you</h1>
          <div className={styles.contact__btn}>
            <Link href="/contact-us" className={styles.contact__link}>
              Book a consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactComponent;
