import React from "react";

import classes from "./SliderImage.module.css"

const SliderImage = (props) => {
  return (
    <div className={classes["image-container"]}>
      <img className={classes.image} src={props.src} alt={props.alt} />
    </div>
  );
};

export default SliderImage;
