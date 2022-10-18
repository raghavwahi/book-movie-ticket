import React from "react";
import { useNavigate } from "react-router";

import { STRINGS } from "../../static/config";
import Button from "../Button/Button";
import classes from "./StripItem.module.css";

const StripItem = (props) => {
  const navigate = useNavigate();

  const bookMovieHandler = (id) => {
    navigate(`/latest/${id}`);
  };

  return (
    <div className={classes["strip-item"]}>
      <img src={props.src} alt={props.alt} />
      {props.enableButton && (
        <Button
          onClick={() => {
            bookMovieHandler(props.id);
          }}
          title={STRINGS.bookNow}
        />
      )}
    </div>
  );
};

export default StripItem;
