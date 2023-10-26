'use client'
import React from "react";
import styles from "@/sections/AuthSectionCommon.module.scss";
import ContactUsSection from "@/sections/contact-us_page/ContactUsSection";


const ContactUs = () => {
  return (
      <section className={styles.wrapper}>
        <ContactUsSection />
      </section>
  );
};

export default ContactUs;
