import { ErrorMessage, Field } from "formik";
import React from "react";
////

const Input = (props) => {
  const { name, label, ...rest } = props;
  return (
    <>
      <div>
        <label htmlFor={label}>{label}</label>
        <Field name={name} id={name} {...rest} />
        {/* //..rest contains remaining props which is type='email' */}
        <ErrorMessage name={name} />
      </div>
    </>
  );
};

export default Input;
