import React from "react";
import styles from "./DonateForm.module.scss";
import classNames from "classnames";
import { CiCircleInfo } from "react-icons/ci";

const DonateForm = () => {
  return (
    <form className={classNames(styles.form, styles.form__placeholder)}>
      <div className={classNames(styles.form__container, styles.form__line)}>
        <div className={styles.form__container__btn}>One donate</div>
        <div className={styles.form__container__btn}>Regular donate</div>
      </div>
      <div className={styles.form__boxed}>
        <input type="number" min={0} required className={styles.form__input} />
        <label className={styles.form__input__label}>UAN</label>
      </div>
      <div className={styles.form__place}>
        <button className={styles.form__btn} type="submit">
          Donate now
        </button>
        <div className={styles.form__place__container}>
          <CiCircleInfo className={styles.form__icon} />
          <span className={styles.form__text}>
            You can cancel your subscription in your personal account on LiqPay
          </span>
        </div>
      </div>
    </form>
  );
};

export default DonateForm;
