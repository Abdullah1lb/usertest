import React from "react";
import Checkbox from "../Pages/Checkbox";
import Input from "../Pages/Input";
import Radio from "../Pages/Radio";
import Select from "../Pages/Select";
import Textarea from "../Pages/Textarea";

const Controller = (props) => {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return (
        <div>
          <Input {...rest} />
        </div>
      );
    case "description":
      return (
        <div>
          <Textarea {...rest} />
        </div>
      );
    case "select":
      return (
        <div>
          <Select {...rest} />
        </div>
      );
    case "radio":
      return (
        <div>
          <Radio {...rest} />
        </div>
      );
    case "checkbox":
      return (
        <div>
          <Checkbox {...rest} />
        </div>
      );
    default:
      return null;
  }
};

export default Controller;
