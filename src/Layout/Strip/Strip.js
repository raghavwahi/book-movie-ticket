import React from "react";

import classes from "./Strip.module.css";
import StripItem from "./StripItem";

const Strip = (props) => {
  const data = props.data.slice(0, 7);
  const images = data.map((item) => {
    return (
      <StripItem
        src={item.imageUrl}
        alt={item.name}
        key={item.id}
        id={item.id}
        enableButton={props.enableButtons}
      />
    );
  });

  return (
    <div className={classes["container-strip"]}>
      <p>{props.title}</p>
      <div className={classes.strip}>{images}</div>
    </div>
  );
};

export default Strip;
