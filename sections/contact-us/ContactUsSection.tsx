import React from "react";
import styles from "./ContactUsSection.module.scss";
import FormComponent from "@/components/FormComponent";
import classNames from "classnames";

const ContactUsSection = () => {
  return (
    <div className={classNames(styles.contact_container, styles.container)}>
      <div className={styles.contact_container__boxed}>
        <h1 className={styles.contact_container__boxed__title}>Contact Us</h1>
        <p className={styles.contact_container__boxed__text}>
          Submit your request now, and we will get in touch with you to discuss
          the details and develop a customized solution. Together, we can create
          a powerful tool for your business and ensure your success in the
          e-commerce world.
        </p>
      </div>
      <FormComponent />
    </div>
  );
};

export default ContactUsSection;
