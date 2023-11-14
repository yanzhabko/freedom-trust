import React, { use, useState } from "react";
import styles from "./ContactUsSection.module.scss";
import classNames from "classnames";
import BasicInfoComponent from "@/components/BasicInfoComponent";
import MedicalInfoComponent from "@/components/MedicalInfoComponent";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import emailService from "@/services/email-service";

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
  childName: yup
    .string()
    .required("Child name is a required field")
    .min(2, "Child name must be at least 2 characters"),
  age: yup
    .number()
    .required("Age is a required field")
    .min(0, "Diagnosis must be at least 0 number")
    .max(100, "Age must be less than or equal to 100"),
  diagnosis: yup
    .string()
    .required("Diagnosis is a required field")
    .min(2, "Diagnosis must be at least 2 characters"),
  stage: yup.number().min(1).max(4),
});

interface FormData {
  name: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  childName: string;
  age: number;
  diagnosis: string;
  stage?: number;
}

const ContactUsSection: React.FC = () => {
  const [submitDisabled, setSubmitDisabled] = useState(true);
  const [step, setStep] = useState(1);
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
      childName: "",
      age: undefined,
      diagnosis: "",
      stage: undefined,
    },
    resolver: yupResolver(schema),
  });

  watch(
    ({
      name,
      lastName,
      email,
      phoneNumber,
      childName,
      age,
      diagnosis,
      stage,
    }) => {
      setSubmitDisabled(
        !name ||
          !lastName ||
          !email ||
          !phoneNumber ||
          !childName ||
          !age ||
          !diagnosis ||
          !stage
      );
    }
  );

  const handleNext = () => {
    setStep((i) => {
      return i >= 2 ? i : i + 1;
    });
  };

  const handleBack = () => {
    setStep((i) => {
      return i <= 0 ? i : i - 1;
    });
  };

  const handleSubmitData = (data: FormData): void => {
    emailService.sendEmail(data);
    reset();
    setStep(1);
  };

  return (
    <div className={classNames(styles.contact_container, styles.container)}>
      <div className={styles.contact_container__boxed}>
        <h1 className={styles.contact_container__boxed__title}>Contact Us</h1>
        <p className={styles.contact_container__boxed__text}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi cumque
          corporis accusantium nemo, neque ducimus quibusdam officia labore
          sequi facilis. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Nemo optio mollitia similique vitae voluptatem neque maxime
          cupiditate sed quo? Similique.
        </p>
      </div>

      <form className={styles.form} onSubmit={handleSubmit(handleSubmitData)}>
        {step === 1 && (
          <>
            <BasicInfoComponent
              register={register}
              errorMassage={errors}
              submitDisabled={submitDisabled}
              control={control}
            />
            <div className={styles.form__box}>
              <button className={styles.form__btn} onClick={() => handleNext()}>
                Next
              </button>
            </div>
          </>
        )}
        {step === 2 && (
          <>
            <MedicalInfoComponent
              register={register}
              errorMassage={errors}
              submitDisabled={submitDisabled}
            />
            <div className={styles.form__container}>
              <button className={styles.form__btn} onClick={() => handleBack()}>
                Back
              </button>
              <button
                className={styles.form__btn}
                type="submit"
                disabled={submitDisabled}
              >
                Send
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
};

export default ContactUsSection;
