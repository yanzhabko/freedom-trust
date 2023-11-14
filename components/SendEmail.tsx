import React from "react";

export const SendEmail = (props: any) => {
  const {
    name,
    lastName,
    email,
    phoneNumber,
    childName,
    age,
    diagnosis,
    stage,
  } = props;
  return (
    <div>
      <h4>
        {name} {lastName}
      </h4>
      <p>
        E-mail: {email} <br />
        Phone: {`+${phoneNumber}`} <br />
        Information about child <br />
        Name: {childName} <br />
        Age: {age} <br />
        Diagnosis: {diagnosis} <br />
        Stage: {stage}
      </p>
    </div>
  );
};
