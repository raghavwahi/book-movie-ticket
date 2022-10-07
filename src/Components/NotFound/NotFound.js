import React from "react";
import { Link } from "react-router-dom";

import { NOT_FOUND_PAGE } from "../../static/config";
import classes from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div>
      <p className={classes.heading}>{NOT_FOUND_PAGE.heading}</p>
      <div className={classes["sub-heading-container"]}>
        <p className={classes["sub-heading"]}>{NOT_FOUND_PAGE.subHeading1}</p>
        <p className={classes["sub-heading"]}>
          {NOT_FOUND_PAGE.subHeading2[0]}
          <Link to="/">{NOT_FOUND_PAGE.subHeading2[1]}</Link>
          {NOT_FOUND_PAGE.subHeading2[2]}
        </p>
      </div>
    </div>
  );
};

export default NotFound;
