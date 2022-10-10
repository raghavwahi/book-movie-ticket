import React from "react";

import classes from "./InputField.module.css";

const InputField = (props) => {
    const inputClasses = `${props.className} ${classes.input}`
  return (
    <input
      className={inputClasses}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
      id={props.id}
    />
  );
};

export default InputField;
