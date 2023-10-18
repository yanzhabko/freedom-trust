import React, { FC } from "react";
import styles from "./InputComponent.module.scss";
import { FieldError, UseFormRegister } from "react-hook-form";
import classNames from "classnames";

type inputProps = {
  error: FieldError | undefined;
  showError: boolean;
  register: UseFormRegister<any>;
  registerName: string;
  placeholder: string;
  errorText?: string;
  applyValidation?: boolean;
  pattern?: any;
  type?: string;
};

const InputComponent: FC<inputProps> = ({
  error,
  showError,
  applyValidation = true,
  placeholder,
  register,
  registerName,
  errorText,
  pattern,
  type,
}) => {
  const invalid = error && showError;
  const validation: any = applyValidation
    ? {
        pattern: pattern
          ? {
              value: pattern,
              message: errorText,
            }
          : undefined,
      }
    : {};

  return (
    <div className={styles.boxed}>
      <input
        type={type}
        className={classNames(styles.input, { [styles.error]: invalid })}
        {...register(registerName, validation)}
        required
      />
      <label>{placeholder}</label>
      <div className={styles.line}></div>
      <div className={styles.underline}></div>
      {invalid && <p className={styles.error_massages}>{error.message}</p>}
    </div>
  );
};

export default InputComponent;
