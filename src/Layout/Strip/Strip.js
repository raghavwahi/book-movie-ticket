import React from "react";

import classes from "./Strip.module.css";
import StripItem from "./StripItem";

const Strip = (props) => {
  const images = props.data.map((item) => {
    return (
      <StripItem
        src={item.imageUrl}
        alt={item.name}
        key={item._id}
        id={item._id}
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
