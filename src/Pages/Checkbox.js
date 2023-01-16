import { ErrorMessage, Field } from "formik";
import React from "react";

const Checkbox = (props) => {
  const { name, label, options } = props;
  return (
    <>
      <label>{label}</label>
      <Field name={name}>
        {({ field }) => {
          return options.map((opt) => {
            return (
              <React.Fragment key={opt.key}>
                <input
                  type="checkbox"
                  id={opt.key}
                  {...field}
                  value={opt.value}
                  checked={field.value.includes(opt.value)}
                />
                <label htmlFor={opt.key}>{opt.value}</label>
              </React.Fragment>
            );
          });
        }}
      </Field>
      <ErrorMessage name={name} />
    </>
  );
};

export default Checkbox;
