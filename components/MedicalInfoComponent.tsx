// "use client";
// import React, { useState } from "react";
// import styles from "./MedicalInfoComponent.module.scss";
// import InputComponent from "./InputComponent";
// import Link from "next/link";
// import { useForm, Controller, UseFormRegister } from "react-hook-form";
// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";
// import classNames from "classnames";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { Schema } from "yup";

// type MedicalInfoFormData = {
//   childName: string;
//   age: string;
//   diagnosis: string;
//   stage: string;
// };

// interface MedicalInfoProps {
//   register: UseFormRegister<MedicalInfoFormData>;
//   control: any; // Adjust the type as needed for 'control'
//   // handleStepNext: () => void;
//   handleBackStep: () => void;
//   storeData: (data: MedicalInfoFormData) => void;
// }

// const MedicalInfoComponent: React.FC<MedicalInfoProps> = ({
//   register,
//   control,
//   // handleStepNext,
//   handleBackStep,
//   storeData,
// }) => {
//   const [submitDisabled, setSubmitDisabled] = useState(true);
//   const {
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     defaultValues: {
//       childName: "",
//       age: "",
//       diagnosis: "",
//       stage: "",
//     },
//     // resolver: yupResolver(schema)
//   });
//   // const {
//   //   handleSubmit,
//   //   register,
//   //   formState: { errors },
//   //   reset,
//   //   watch,
//   //   control,
//   // } = useForm({
//   //   defaultValues: {
//   //     childName: "",
//   //     age: "",
//   //     diagnosis: "",
//   //     stage: "",
//   //   },
//   // });

//   // const invalid = errors.phoneNumber?.message && !submitDisabled;

//   const onSubmitStep = (data: MedicalInfoFormData) => {
//     storeData(data)
//     // handleBackStep();
//   };

//   // const toggleBackStep = () => {
//   //   handleBackStep();
//   // };

//   return (
//     <form className={styles.form} onSubmit={handleSubmit(onSubmitStep)}>
//       {/* <div>
//         <h2 className={styles.form__title}>Information about you</h2>
//         <hr />
//       </div> */}
//       {/* <div className={styles.form__first_box}>
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
//       <InputComponent
//         label="E-mail"
//         register={register}
//         registerName="email"
//         errorMessage={errors.email?.message}
//         type="text"
//         showError={!submitDisabled}
//       />
//       <Controller
//         name="phoneNumber"
//         control={control}
//         render={({ field: { ref, ...field } }) => (
//           <div className={styles.phone__container}>
//             <PhoneInput
//               {...field}
//               inputClass={classNames(styles.phone, {
//                 [styles.errors]: invalid,
//               })}
//               buttonClass={classNames(styles.btn, {
//                 [styles.errors]: invalid,
//               })}
//               country={"ua"}
//             />
//             <p className={styles.error_massages}>
//               {errors.phoneNumber?.message}
//             </p>
//           </div>
//         )}
//       /> */}

//       <div>
//         <h2 className={styles.form__title}>Information about your child</h2>
//         <hr />
//       </div>
//       <div className={styles.form__first_box}>
//         <InputComponent
//           label="Child name"
//           register={register}
//           registerName="childName"
//           errorMessage={errors.childName?.message}
//           type="text"
//           showError={!submitDisabled}
//         />
//         <InputComponent
//           label="Age"
//           register={register}
//           registerName="age"
//           errorMessage={errors.age?.message}
//           type="number"
//           showError={!submitDisabled}
//           max="100"
//         />
//       </div>
//       <div className={styles.form__first_box}>
//         <InputComponent
//           label="Diagnosis"
//           register={register}
//           registerName="diagnosis"
//           errorMessage={errors.diagnosis?.message}
//           type="text"
//           showError={!submitDisabled}
//         />
//         <InputComponent
//           label="Stage"
//           register={register}
//           registerName="stage"
//           errorMessage={errors.stage?.message}
//           type="number"
//           showError={!submitDisabled}
//           max="4"
//         />
//       </div>

//       <div className={styles.form__btn_container}>
//         <button
//           // type="submit"
//           className={styles.form__btn}
//           // disabled={submitDisabled}
//           onClick={() => handleBackStep()}
//         >
//           Back
//           {/* <Link href="/contact-us" className={styles.form__link}>Back</Link> */}
//         </button>
//         <p className={styles.form__title}>or</p>
//         <button
//           className={styles.form__btn}
//           type="submit"
//           // disabled={submitDisabled}
//         >
//           Continue
//         </button>
//       </div>
//     </form>
//   );
// };

// export default MedicalInfoComponent;

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
        {/* <InputComponent
          label="Child name"
          register={register}
          registerName="childName"
          errorMessage={errorMassage.childName?.message}
          type="text"
          showError={!submitDisabled}
        /> */}
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
