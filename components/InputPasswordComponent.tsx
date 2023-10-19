import React, { useState } from "react";
import styles from "./InputPasswordComponent.module.scss";
import { UseFormRegister } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import classNames from "classnames";

type inputProps = {
  label: string;
  register: UseFormRegister<any>;
  registerName: string;
  type?: string;
  errorMessage: any;
  showError: boolean;
};

const InputPasswordComponent: React.FC<inputProps> = ({
  label,
  register,
  registerName,
  type,
  errorMessage,
  showError,
}) => {
  const [hide, setHide] = useState(false);
  const invalid = errorMessage && showError;

  const toggleHide = () => {
    setHide(!hide);
  };

  return (
    <div className={styles.boxed}>
      <input
        type={hide ? "text" : "password"}
        className={classNames(styles.input, { [styles.errors]: invalid })}
        {...register(registerName)}
        autoComplete="off"
        required
      />
      <label>{label}</label>
      {!hide ? (
        <AiFillEye className={styles.boxed__icon} onClick={toggleHide} />
      ) : (
        <AiFillEyeInvisible
          className={styles.boxed__icon}
          onClick={toggleHide}
        />
      )}
      <p className={styles.error_massages}>{errorMessage}</p>
    </div>
  );
};

export default InputPasswordComponent;
