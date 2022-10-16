import React from "react";

import classes from "./SliderImage.module.css";

const SliderImage = (props) => {
  const containerClasses = `${classes.slide} ${
    props.visible && classes["active-anim"]
  }`;
  
  return (
    <div className={containerClasses}>
      <img src={props.src} alt={props.alt} />
    </div>
  );
};

export default SliderImage;
