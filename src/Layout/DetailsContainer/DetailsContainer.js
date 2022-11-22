import React from "react";
import Container from "../Container/Container";

import classes from "./DetailsContainer.module.css";

const DetailsContainer = (props) => {
  return (
    <Container>
      <div className={classes["sub-container"]}>
        <img
          className={classes.shadow}
          src={props.data.imageUrl}
          alt={props.data.name}
        ></img>
        <div>
          <p className={classes["sub-text"]}>{props.data.name}</p>
          <p className={classes["sub-text"]}>{props.data.date}</p>
          <p className={classes["sub-text"]}>
            No. of Seats booked: {props.data.seatCount}
          </p>
        </div>
      </div>
    </Container>
  );
};

export default DetailsContainer;
