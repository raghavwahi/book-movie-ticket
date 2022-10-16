import React from "react";

import classes from "./SliderImage.module.css";

const SliderImage = (props) => {
  let containerClasses = classes.slide;
  if (props.visible) {
    containerClasses = `${containerClasses} ${classes["active-anim"]}`;
  }

  return (
    <div className={containerClasses}>
      <img src={props.src} alt={props.alt} />
    </div>
  );
};

export default SliderImage;
