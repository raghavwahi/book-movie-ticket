import React from "react";

import classes from "./SeatsButton.module.css";
import Svg from "../Svg/Svg";

const SeatsButton = (props) => {
  return (
    <button className={classes["btn-seats"]} onClick={props.changeSeats}>
      <Svg path={props.path} />
    </button>
  );
};

export default SeatsButton;
