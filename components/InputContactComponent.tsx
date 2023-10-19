import React from "react";
import styles from "./InputComponent.module.scss";
import { UseFormRegister } from "react-hook-form";

type inputProps = {
  label: string;
  register: UseFormRegister<any>;
  registerName: string;
  type: string;
  errorMessage: any;
  showError: boolean;
};

const InputContactComponent: React.FC<inputProps> = ({
  label,
  register,
  registerName,
  type,
  errorMessage,
  showError,
}) => {
  return (
    <div className={styles.boxed}>
      <input type="text" {...register(registerName)} />
      <label>{label}</label>
      <p className={styles.error_massages}>{errorMessage}</p>
    </div>
  );
};

export default InputContactComponent;
