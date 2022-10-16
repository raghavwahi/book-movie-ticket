import React from "react";

import classes from "./SliderButton.module.css";
import { SLIDER_ICONS } from "../../static/config";

const SliderButton = (props) => {
  const className = `${classes["btn-slide"]} ${classes[props.direction]}`;

  return (
    <button className={className} onClick={props.moveSlide}>
      <svg xmlns={SLIDER_ICONS.url}>
        <path d={props.path} />
      </svg>
    </button>
  );
};

export default SliderButton;
