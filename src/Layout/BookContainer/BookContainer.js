import React from "react";

import { ICONS, PARAMS, STRINGS } from "../../static/config";
import Button from "../Button/Button";
import Container from "../Container/Container";
import classes from "./BookContainer.module.css";
import SeatsButton from "./SeatsButton";

const BookContainer = (props) => {
  const inputs = PARAMS.availableShowtimes.map((showtime, index) => {
    return (
      <div key={showtime}>
        <input id={index} type="radio" value={showtime} name="showtime" />
        <label htmlFor={index}>{showtime}</label>
      </div>
    );
  });

  return (
    <Container>
      <p className={classes.title}>{props.data.name}</p>
      <div className={classes["sub-container"]}>
        <img
          className={classes.shadow}
          src={props.data.imageUrl}
          alt={props.data.name}
        ></img>
        <div>
          <p className={classes["sub-text"]}>{PARAMS.date}</p>
          <div className={classes["list-info"]}>{inputs}</div>
          <div className={classes["seat-buttons"]}>
            <SeatsButton
              changeSeats={props.removeSeatHandler}
              path={ICONS.remove}
            />
            <p className={classes["sub-text"]}>{props.seatCount}</p>
            <SeatsButton changeSeats={props.addSeatHandler} path={ICONS.add} />
          </div>
        </div>
      </div>
      <Button
        className={classes.shadow}
        onClick={props.onClick}
        title={STRINGS.bookNow}
      />
    </Container>
  );
};

export default BookContainer;
