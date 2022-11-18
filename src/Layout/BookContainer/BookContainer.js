import React, { useState } from "react";

import { ICONS, PARAMS, STRINGS } from "../../static/config";
import Button from "../Button/Button";
import Container from "../Container/Container";
import classes from "./BookContainer.module.css";
import SeatsButton from "./SeatsButton";

const BookContainer = (props) => {
  const [seatCount, setSeatCount] = useState(1);
  const inputs = PARAMS.availableShowtimes.map((showtime, index) => {
    return (
      <div>
        <input
          id={index}
          key={showtime}
          type="radio"
          value={showtime}
          name="showtime"
        />
        <label htmlFor={index}>{showtime}</label>
      </div>
    );
  });

  const addSeatHandler = () => {
    if (seatCount + 1 <= 10) {
      setSeatCount(seatCount + 1);
    }
  };

  const removeSeatHandler = () => {
    if (seatCount > 1) {
      setSeatCount(seatCount - 1);
    }
  };

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
          <p className={classes["sub-text"]}>{new Date().toDateString()}</p>
          <div className={classes["list-info"]}>{inputs}</div>
          <div className={classes["seat-buttons"]}>
            <SeatsButton changeSeats={removeSeatHandler} path={ICONS.remove} />
            <p className={classes["sub-text"]}>{seatCount}</p>
            <SeatsButton changeSeats={addSeatHandler} path={ICONS.add} />
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
