import { ErrorMessage, Field } from "formik";
import React from "react";

const Textarea = (props) => {
  const { name, label, ...rest } = props;
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <Field as="Textarea" id={name} name={name} {...rest} />
      <ErrorMessage name={name} />
    </>
  );
};

export default Textarea;
