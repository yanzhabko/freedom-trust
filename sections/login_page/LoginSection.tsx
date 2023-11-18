"use client";
import React, { useState } from "react";
import styles from "./LoginSection.module.scss";
import Link from "next/link";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputComponent from "@/components/InputComponent";
import InputPasswordComponent from "@/components/InputPasswordComponent";

const schema = yup.object({
  email: yup
    .string()
    .required("Email is a required field")
    .email("Email is not valid"),
  password: yup
    .string()
    .required()
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
      "Password should include at least one lowercase letter, one uppercase letter, and one digit"
    ),
  confirmPassword: yup
    .string()
    .required("Confirm password is a required field")
    .oneOf(
      [yup.ref("password")],
      "Password and confirm password must be match"
    ),
});

const LoginSection = () => {
  const [submitDisabled, setSubmitDisabled] = useState(true);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    resolver: yupResolver(schema),
  });

  watch(({ email, password, confirmPassword }) => {
    setSubmitDisabled(!email || !password || !confirmPassword);
  });

  const onSubmit = (data: any): void => {
    console.log(data);
    reset();
  };

  return (
    <div className={styles.login_section}>
      <div className={styles.container}>
        <div className={styles.login_section__placeholder}>
          <h2 className={styles.login_section__title}>Log-in</h2>
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <InputComponent
              label="E-mail"
              registerName="email"
              register={register}
              errorMessage={errors.email?.message}
              type="text"
              showError={!submitDisabled}
            />
            <InputPasswordComponent
              label="Password"
              register={register}
              registerName="password"
              errorMessage={errors.password?.message}
              type="password"
              showError={!submitDisabled}
            />
            <InputPasswordComponent
              label="Confirmed password"
              register={register}
              registerName="confirmPassword"
              errorMessage={errors.confirmPassword?.message}
              showError={!submitDisabled}
            />
            <div className={styles.form__button_container}>
              <button type="submit" className={styles.form__button}>
                Log-in
              </button>
              <span className={styles.form__box}>
                Have`nt an account?
                <Link href="/registration" className={styles.form__box__link}>
                  Register
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginSection;
