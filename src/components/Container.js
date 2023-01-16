import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Controller from "./Controller";
const DropdownOps = [
  { key: "Opt", Value: "Select an Option" },
  { key: "Opt1", Value: "Laptop" },
  { key: "Opt2", Value: "Backpack" },
  { key: "Opt3", Value: "Gadgets" },
];
const RadioOps = [
  { key: "Opt1", value: "Pakistan" },
  { key: "Opt2", value: "UAE" },
  { key: "Opt3", value: "Qatar" },
];
const CheckOps = [
  { key: "Opt1", value: "Lahore" },
  { key: "Opt2", value: "Islamabad" },
  { key: "Opt3", value: "Karachi" },
];
const Container = () => {
  const initialValues = {
    email: "",
    description: "",
    select: "",
    radio: "",
    checkbox: [],
  };
  const validationSchema = Yup.object({
    email: Yup.string().required("Required"),
    description: Yup.string().required(),
    select: Yup.string().required(),
    radio: Yup.string().required(),
    checkbox: Yup.array().required(),
  });
  const onSubmit = (values) => console.log("Values", values);
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {(formik) => {
          return (
            <Form>
              <Controller
                control="input"
                name="email"
                type="email"
                label="email"
              />
              <Controller
                control="description"
                name="description"
                label="description"
              />
              <Controller
                control="select"
                name="select"
                label="Select Options"
                options={DropdownOps}
              />
              <Controller
                control="radio"
                name="radio"
                label="Select Options"
                options={RadioOps}
              />
              <Controller
                control="checkbox"
                name="checkbox"
                label="Check Options"
                options={CheckOps}
              />
              <button type="submit">Submit</button>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default Container;
