// "use client";
// import React, { useState } from "react";
// import styles from "./BasicInfoComponent.module.scss";
// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";
// import { useForm, Controller, UseFormRegister } from "react-hook-form";
// import InputComponent from "./InputComponent";
// import classNames from "classnames";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";

// type BasicInfoFormData = {
//   name: string;
//   lastName: string;
//   email: string;
//   phoneNumber: string;
// };

// interface BasicInfoProps {
//   register: UseFormRegister<BasicInfoFormData>;
//   control: any;
//   handleStepNext: () => void;
//   storeData: (data: BasicInfoFormData) => void;
// }

// const schema = yup.object({
//   name: yup
//     .string()
//     .required("Name is a required field")
//     .min(2, "Name must be at least 2 characters"),
//   lastName: yup
//     .string()
//     .required("Last name is a required field")
//     .min(2, "Last name must be at least 2 characters"),
//   email: yup
//     .string()
//     .required("Email is a required field")
//     .email("Email is not valid"),
//   phoneNumber: yup
//     .string()
//     .required("Phone number is required")
//     .min(11, "Please enter a valid number"),
// });

// const BasicInfoComponent: React.FC<BasicInfoProps> = ({
//   register,
//   control,
//   handleStepNext,
//   storeData,
// }) => {
//   const [submitDisabled, setSubmitDisabled] = useState(true);
//   // const schema = yup.object({
//   //   name: yup
//   //     .string()
//   //     .required("Name is a required field")
//   //     .min(2, "Name must be at least 2 characters"),
//   //   lastName: yup
//   //     .string()
//   //     .required("Last name is a required field")
//   //     .min(2, "Last name must be at least 2 characters"),
//   //   email: yup
//   //     .string()
//   //     .required("Email is a required field")
//   //     .email("Email is not valid"),
//   //   phoneNumber: yup
//   //     .string()
//   //     .required("Phone number is required")
//   //     .min(11, "Please enter a valid number"),
//   // });
//   const {
//     handleSubmit,
//     formState: { errors },
//     watch,
//   } = useForm({
//     mode: "onTouched",
//     defaultValues: {
//       name: "",
//       lastName: "",
//       email: "",
//       phoneNumber: "",
//     },
//     //
//   });
//   // const { submitDisabled, setSubmitDisabled } = disable;
//   // console.log(submitDisabled)

//   // const {
//   //   handleSubmit,
//   //   register,
//   //   formState: { errors },
//   //   reset,
//   //   watch,
//   //   control,
//   // } = useForm({
//   //   defaultValues: {
//   //     name: "",
//   //     lastName: "",
//   //     email: "",
//   //     phoneNumber: "",
//   //   },
//   //   resolver: yupResolver(schema),
//   // });

//   watch(({ name, lastName, email, phoneNumber }) => {
//     setSubmitDisabled(!name || !lastName || !email || !phoneNumber);
//   });

//   const onSubmitStep = (data: BasicInfoFormData) => {
//     storeData(data);
//     handleStepNext();
//   };

//   // const toggleNextStep = () => {
//   //   // console.log(date);
//   //   handleStepNext();
//   //   // reset();
//   // };

//   const invalid = errors.phoneNumber?.message && !submitDisabled;

//   return (
//     <form className={styles.form} onSubmit={handleSubmit(onSubmitStep)}>
//       <div className={styles.form__first_box}>
//         <InputComponent
//           label="Name"
//           register={register}
//           registerName="name"
//           errorMessage={errors.name?.message}
//           type="text"
//           showError={!submitDisabled}
//         />
//         <InputComponent
//           label="Last name"
//           register={register}
//           registerName="lastName"
//           errorMessage={errors.lastName?.message}
//           type="text"
//           showError={!submitDisabled}
//         />
//       </div>
//       <div className={styles.form__first_second}>
//         <InputComponent
//           label="E-mail"
//           register={register}
//           registerName="email"
//           errorMessage={errors.email?.message}
//           type="text"
//           showError={!submitDisabled}
//         />
//         <Controller
//           name="phoneNumber"
//           control={control}
//           render={({ field: { ref, ...field } }) => (
//             <div className={styles.phone__container}>
//               <PhoneInput
//                 {...field}
//                 inputClass={classNames(styles.phone, {
//                   [styles.errors]: invalid,
//                 })}
//                 buttonClass={classNames(styles.btn, {
//                   [styles.errors]: invalid,
//                 })}
//                 country={"ua"}
//               />
//               <p className={styles.error_massages}>
//                 {errors.phoneNumber?.message}
//               </p>
//             </div>
//           )}
//         />
//         <div className={styles.form__btn_container}>
//           {/* <button
//             className={styles.form__btn}
//             disabled={submitDisabled}
//             type="submit"
//           >
//             Book consultation
//           </button> */}
//           {/* <p className={styles.form__btn_container__title}>or</p> */}
//           <button
//             type="submit"
//             className={styles.form__btn}
//             // onClick={toggleNextStep}
//           >
//             Next
//             {/* <Link href="contact-us/detail-form" className={styles.form__link}>
//               Detailed form
//             </Link> */}
//           </button>
//         </div>
//       </div>
//     </form>
//   );
// };

// export default BasicInfoComponent;

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
