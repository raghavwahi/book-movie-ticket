import React from "react";
import { useSelector } from "react-redux";

import Overview from "../../Layout/Overview/Overview";
import actions from "../../Reducer/actions";
import { STRINGS } from "../../static/config";

const Latest = () => {
  const { latestMovies } = useSelector((store) => store.movies);

  return (
    <Overview
      data={latestMovies}
      title={STRINGS.latestMovies}
      enableButtons={true}
      action={actions.fetchLatestMovies()}
    />
  );
};

export default Latest;
