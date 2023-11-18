"use client";
import React, { useState } from "react";
import styles from "./RegistrationSection.module.scss";
import { useForm, Controller } from "react-hook-form";
import Link from "next/link";
import InputComponent from "@/components/InputComponent";
import InputPasswordComponent from "@/components/InputPasswordComponent";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import classNames from "classnames";

const schema = yup.object({
  name: yup
    .string()
    .required("Name is a required field")
    .min(2, "Name must be at least 2 characters"),
  email: yup
    .string()
    .required("Email is a required field")
    .email("Email is not valid"),
  phoneNumber: yup
    .string()
    .required("Phone number is required")
    .min(11, "Please enter a valid number"),
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

const RegistrationComponent = () => {
  const [submitDisabled, setSubmitDisabled] = useState(true);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    },
    resolver: yupResolver(schema),
  });

  watch(({ name, email, phoneNumber, password, confirmPassword }) => {
    setSubmitDisabled(
      !name || !email || !phoneNumber || !password || !confirmPassword
    );
  });

  const onSubmit = (data: any): void => {
    console.log(data);
    reset();
  };

  const invalid = errors.phoneNumber?.message && !submitDisabled;

  return (
    <div className={styles.registration_section}>
      <div className={styles.container}>
        <div className={styles.registration_section__placeholder}>
          <h2 className={styles.registration_section__title}>Registration</h2>
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <InputComponent
              label="Name"
              register={register}
              registerName="name"
              errorMessage={errors.name?.message}
              type="text"
              showError={!submitDisabled}
            />
            <InputComponent
              label="E-mail"
              register={register}
              registerName="email"
              errorMessage={errors.email?.message}
              type="text"
              showError={!submitDisabled}
            />
            <Controller
              name="phoneNumber"
              control={control}
              render={({ field: { ref, ...field } }) => (
                <div className={styles.phone__container}>
                  <PhoneInput
                    {...field}
                    inputClass={classNames(styles.phone, {
                      [styles.errors]: invalid,
                    })}
                    buttonClass={classNames(styles.btn, {
                      [styles.errors]: invalid,
                    })}
                    country={"ua"}
                  />
                  <p className={styles.error_massages}>
                    {errors.phoneNumber?.message}
                  </p>
                </div>
              )}
            />
            <InputPasswordComponent
              label="Create password"
              register={register}
              registerName="password"
              errorMessage={errors.password?.message}
              type="password"
              showError={!submitDisabled}
            />
            <InputPasswordComponent
              label="Confirm password"
              register={register}
              registerName="confirmPassword"
              errorMessage={errors.confirmPassword?.message}
              showError={!submitDisabled}
            />
            <div className={styles.form__bottom_container}>
              <button
                className={styles.form__btn}
                disabled={submitDisabled}
                type="submit"
              >
                Continue
              </button>
              <span className={styles.form__title}>
                Have an account?
                <Link href="/login" className={styles.form__link}>
                  Log-in
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationComponent;
