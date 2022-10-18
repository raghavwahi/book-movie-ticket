import React from "react";

import { ICONS } from "../../static/config";
import classes from "./Svg.module.css";

const Svg = (props) => {
  return (
    <svg className={classes.svg} xmlns={ICONS.url}>
      <path d={props.path} />
    </svg>
  );
};

export default Svg;
