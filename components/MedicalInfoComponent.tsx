import React from "react";
import { UseFormRegister } from "react-hook-form";
import styles from "./MedicalInfoComponent.module.scss";
import InputComponent from "./InputComponent";

type MedicalInfoProps = {
  register: UseFormRegister<any>;
  errorMassage: any;
  submitDisabled: boolean;
};

const MedicalInfoComponent: React.FC<MedicalInfoProps> = ({
  register,
  errorMassage,
  submitDisabled,
}) => {
  return (
    <>
      <div className={styles.form__title_container}>
        <h2 className={styles.form__title}>Information about your child</h2>
        <hr className={styles.form__line} />
      </div>
      <InputComponent
        label="Child name"
        register={register}
        registerName="childName"
        errorMessage={errorMassage.childName?.message}
        type="text"
        showError={!submitDisabled}
      />
      <div className={styles.form__first_box}>
        <InputComponent
          label="Age"
          register={register}
          registerName="age"
          errorMessage={errorMassage.age?.message}
          type="number"
          showError={!submitDisabled}
        />
        <InputComponent
          label="Stage"
          register={register}
          registerName="stage"
          errorMessage={errorMassage.stage?.message}
          type="number"
          showError={!submitDisabled}
        />
      </div>
      
      <InputComponent
          label="Diagnosis"
          register={register}
          registerName="diagnosis"
          errorMessage={errorMassage.diagnosis?.message}
          type="text"
          showError={!submitDisabled}
        />
    </>
  );
};

export default MedicalInfoComponent;
