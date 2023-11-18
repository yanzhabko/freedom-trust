import LoginSection from "@/sections/login_page/LoginSection";
import styles from "@/sections/AuthSectionCommon.module.scss";
import React from "react";

const Login = () => {
  return (
    <section className={styles.wrapper}>
      <LoginSection />
    </section>
  );
};

export default Login;
