import React, { FC } from "react";
import styles from "./InputComponent.module.scss";
import { UseFormRegister } from "react-hook-form";
import classNames from "classnames";

type inputProps = {
  register: UseFormRegister<any>;
  registerName: string;
  label: string;
  type?: string;
  errorMessage: any;
  showError: boolean;
};

const InputComponent: FC<inputProps> = ({
  label,
  register,
  registerName,
  errorMessage,
  type,
  showError,
}) => {
  const invalid = errorMessage && showError;
  

  return (
    <div className={styles.boxed}>
      <input
        type={type}
        className={classNames(styles.input, {[styles.errors]: invalid})}
        {...register(registerName)}
        required
        autoComplete="off"
        // autocomplete="off"
      />
      <label>{label}</label>
      <p className={styles.error_massages}>{errorMessage}</p>
    </div>
  );
};

export default InputComponent;
