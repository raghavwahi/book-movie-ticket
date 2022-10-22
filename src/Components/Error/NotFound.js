import React from "react";

import { NOT_FOUND_PAGE } from "../../static/config";
import Error from "./Error";

const NotFound = () => {
  return (
    <Error
      heading={NOT_FOUND_PAGE.heading}
      subHeading1={NOT_FOUND_PAGE.subHeading1}
      subHeading2={NOT_FOUND_PAGE.subHeading2}
    />
  );
};

export default NotFound;
