"use client";
import React, { useState } from "react";
import styles from "./RegistrationSection.module.scss";
import classNames from "classnames";
import { useForm } from "react-hook-form";
import Link from "next/link";

const RegistrationComponent = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <div className={styles.registration_section}>
      <div className={styles.container}>
        <div className={styles.registration_section__placeholder}>
          <h2 className={styles.registration_section__title}>Registration</h2>

          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="Name"
              className={styles.form__input}
              {...register("Name")}
            />
            <input
              type="text"
              placeholder="E-mail"
              className={styles.form__input}
              {...register("email")}
            />
            <input
              type="text"
              placeholder="Number phone"
              className={styles.form__input}
              {...register("phoneNumber")}
            />
            <input
              type="text"
              placeholder="Password"
              className={styles.form__input}
              {...register("password")}
            />
            <input
              type="text"
              placeholder="Confirmed password"
              className={styles.form__input}
              {...register("passwordConfirm")}
            />

            <button className={styles.form__btn}>Continue</button>
            <span className={styles.form__title}>
              Have an account? <Link href="/login" className={styles.form__link}>Log in</Link>
            </span>
          </form>
        </div>
        </div>
    </div>
  );
};

export default RegistrationComponent;
