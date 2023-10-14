import React from "react";
import RegistrationComponent from "@/sections/registration_page/RegistrationSection";
import styles from "@/sections/AuthSectionCommon.module.scss"

const Registration = () => {
  return (
    <section className={styles.wrapper}>
      <RegistrationComponent />
    </section>
  );
};

export default Registration;
 