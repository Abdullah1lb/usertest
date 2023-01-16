import { ErrorMessage, Field } from "formik";
import React from "react";

const Select = (props) => {
  const { name, options, label, ...rest } = props;
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <Field as="select" name={name} id={name} {...rest}>
        {options.map((opt) => (
          <option key={opt.key} value={opt.Value}>
            {opt.Value}
          </option>
        ))}
      </Field>
      <ErrorMessage name={name} />
    </>
  );
};

export default Select;
