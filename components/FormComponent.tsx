"use client";
import React, { useState } from "react";
import styles from "./FormComponent.module.scss";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useForm, Controller } from "react-hook-form";
import InputComponent from "./InputComponent";
import classNames from "classnames";
import Link from "next/link";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  name: yup
    .string()
    .required("Name is a required field")
    .min(2, "Name must be at least 2 characters"),
  lastName: yup
    .string()
    .required("Last name is a required field")
    .min(2, "Last name must be at least 2 characters"),
  email: yup
    .string()
    .required("Email is a required field")
    .email("Email is not valid"),
  phoneNumber: yup
    .string()
    .required("Phone number is required")
    .min(11, "Please enter a valid number"),
});

const FormComponent = () => {
  const [submitDisabled, setSubmitDisabled] = useState(true);
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
    watch,
    control,
  } = useForm({
    defaultValues: {
      name: "",
      lastName: "",
      email: "",
      phoneNumber: "",
    },
    resolver: yupResolver(schema),
  });

  watch(({ name, lastName, email, phoneNumber }) => {
    setSubmitDisabled(!name || !lastName || !email || !phoneNumber);
  });

  const handleFormSubmit = (date: any) => {
    console.log(date);
    reset();
  };

  const invalid = errors.phoneNumber?.message && !submitDisabled;

  return (
    <form className={styles.form} onSubmit={handleSubmit(handleFormSubmit)}>
      <div className={styles.form__first_box}>
        <InputComponent
          label="Name"
          register={register}
          registerName="name"
          errorMessage={errors.name?.message}
          type="text"
          showError={!submitDisabled}
        />
        <InputComponent
          label="Last name"
          register={register}
          registerName="lastName"
          errorMessage={errors.lastName?.message}
          type="text"
          showError={!submitDisabled}
        />
      </div>
      <div className={styles.form__first_second}>
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
        <div className={styles.form__btn_container}>
          <button
            className={styles.form__btn}
            disabled={submitDisabled}
            type="submit"
          >
            Book consultation
          </button>
          <p className={styles.form__btn_container__title}>or</p>
          <button className={styles.form__btn}>
            <Link href="contact-us/detail-form" className={styles.form__link}>
              Detailed form
            </Link>
          </button>
        </div>
      </div>
    </form>
  );
};

export default FormComponent;
