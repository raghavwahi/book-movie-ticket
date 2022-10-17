import React from "react";
import { useNavigate } from "react-router";

import classes from "./StripItem.module.css";

const StripItem = (props) => {
  const navigate = useNavigate();

  const bookMovieHandler = (id) => {
    navigate(`/latest/${id}`);
  };
  return (
    <div className={classes["strip-item"]}>
      <img src={props.src} alt={props.alt} />
      <button
        onClick={() => {
          bookMovieHandler(props.id);
        }}
      >
        Book Now
      </button>
    </div>
  );
};

export default StripItem;
