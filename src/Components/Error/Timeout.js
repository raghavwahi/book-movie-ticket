import React from "react";

import { TIMEOUT_PAGE } from "../../static/config";
import Error from "./Error";

const Timeout = () => {
  return (
    <Error
      heading={TIMEOUT_PAGE.heading}
      subHeading1={TIMEOUT_PAGE.subHeading1}
      subHeading2={TIMEOUT_PAGE.subHeading2}
    />
  );
};

export default Timeout;
