import React from "react";
import styles from "./BasicInfoComponent.module.scss";
import { UseFormRegister, Controller } from "react-hook-form";
import classNames from "classnames";
import InputComponent from "./InputComponent";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

type BasicInfoProps = {
  register: UseFormRegister<any>;
  errorMassage: any;
  submitDisabled: boolean;
  control: any;
};

const BasicInfoComponent: React.FC<BasicInfoProps> = ({
  register,
  errorMassage,
  submitDisabled,
  control,
}) => {
  return (
    <>
      <div className={styles.form__title_container}>
        <h1 className={styles.form__title}>Information about you</h1>
        <hr className={styles.form__line} />
      </div>
      <div className={styles.form__first_box}>
        <InputComponent
          label="Name"
          register={register}
          registerName="name"
          errorMessage={errorMassage.name?.message}
          type="text"
          showError={!submitDisabled}
        />
        <InputComponent
          label="Last name"
          register={register}
          registerName="lastName"
          errorMessage={errorMassage.lastName?.message}
          type="text"
          showError={!submitDisabled}
        />
      </div>
      <div className={styles.form__first_second}>
        <InputComponent
          label="E-mail"
          register={register}
          registerName="email"
          errorMessage={errorMassage.email?.message}
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
                  [styles.errors]:
                    errorMassage.phoneNumber?.message && !submitDisabled,
                })}
                buttonClass={classNames(styles.btn, {
                  [styles.errors]:
                    errorMassage.phoneNumber?.message && !submitDisabled,
                })}
                country={"ua"}
              />
              <p className={styles.error_massages}>
                {errorMassage.phoneNumber?.message}
              </p>
            </div>
          )}
        />
      </div>
    </>
  );
};

export default BasicInfoComponent;
