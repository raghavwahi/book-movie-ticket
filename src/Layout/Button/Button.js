import React from "react";

import classes from "./Button.module.css";

const Button = (props) => {
  const className = `${classes.btn} ${props.className}`;

  return (
    <button className={className} onClick={props.onClick}>
      {props.title}
    </button>
  );
};

export default Button;
