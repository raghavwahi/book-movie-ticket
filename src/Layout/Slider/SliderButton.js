import React from "react";

import classes from "./SliderButton.module.css";
import Svg from "../Svg/Svg";

const SliderButton = (props) => {
  const className = `${classes["btn-slide"]} ${classes[props.direction]}`;

  return (
    <button className={className} onClick={props.moveSlide}>
      <Svg path={props.path} />
    </button>
  );
};

export default SliderButton;
