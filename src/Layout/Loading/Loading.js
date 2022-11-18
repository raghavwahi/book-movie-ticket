import React, { useEffect, useState } from "react";
import Timeout from "../../Components/Error/Timeout";
import { PARAMS } from "../../static/config";

import classes from "./Loading.module.css";

const Loading = () => {
  const [erroredOut, setErroredOut] = useState(false);

  useEffect(() => {
    if (!erroredOut) {
      setTimeout(() => {
        setErroredOut(true);
      }, PARAMS.pageTimeout);
    }
  });

  if (erroredOut) {
    return <Timeout />;
  }

  return <div className={classes.loading} />;
};

export default Loading;
