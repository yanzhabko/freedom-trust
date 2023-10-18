"use client";
import React, { useState, useMemo } from "react";
import styles from "./RegistrationSection.module.scss";
import { useForm, Controller } from "react-hook-form";
import Link from "next/link";
import InputComponent from "@/components/InputComponent";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import classNames from "classnames";

interface formDate {
  name: string;
  email: string;
  phone: string;
  password: string;
  passwordConfirm: string;
}

const RegistrationComponent = () => {
  const [submitDisabled, setSubmitDisabled] = useState(true);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
    setError,
    control,
  } = useForm<formDate>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      passwordConfirm: "",
    },
  });

  watch(({ name, email, phone, password, passwordConfirm }) => {
    setSubmitDisabled(
      !name || !email || !phone || !password || !passwordConfirm
    );
  });

  const onSubmit = (data: formDate): void => {
    const { name, email, phone, password, passwordConfirm } = data;

    if (password !== passwordConfirm) {
      setError("passwordConfirm", {
        message: "Your password do not match, please try again.",
      });
      return;
    }
    console.log(data);
    reset();
  };

  return (
    <div className={styles.registration_section}>
      <div className={styles.container}>
        <div className={styles.registration_section__placeholder}>
          <h2 className={styles.registration_section__title}>Registration</h2>

          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <InputComponent
              error={errors.name}
              showError={!submitDisabled}
              placeholder="Name"
              register={register}
              registerName="name"
              errorText="Please enter your name"
              pattern={/^[A-Za-z'-]+$/}
            />
            <InputComponent
              error={errors.email}
              showError={!submitDisabled}
              placeholder="E-mail"
              register={register}
              registerName="email"
              errorText="Please enter a valid e-mail"
              pattern={/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i}
            />
            <InputComponent
              error={errors.phone}
              showError={!submitDisabled}
              placeholder="Phone"
              register={register}
              registerName="phone"
              errorText="Please enter a valid phone"
              pattern={/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im}
            />
            <InputComponent
              error={errors.password}
              showError={!submitDisabled}
              placeholder="Create password"
              register={register}
              registerName="password"
              errorText="Password should be at least 8 characters long"
              pattern={/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/}
              type="password"
            />
            <InputComponent
              error={errors.passwordConfirm}
              showError={!submitDisabled}
              placeholder="Confirm password"
              register={register}
              registerName="passwordConfirm"
              errorText="Confirm your password"
              applyValidation={false}
              type="password"
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
                Have an account?{" "}
                <Link href="/login" className={styles.form__link}>
                  Log in
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
