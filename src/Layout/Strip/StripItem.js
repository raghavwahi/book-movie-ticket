import React from "react";

import classes from "./StripItem.module.css";

const StripItem = (props) => {
  return (
    <div className={classes["strip-item"]}>
      <img src={props.src} alt={props.alt} />
    </div>
  );
};

export default StripItem;
