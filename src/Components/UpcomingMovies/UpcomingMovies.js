import React from "react";
import { useSelector } from "react-redux";

import Overview from "../../Layout/Overview/Overview";
import actions from "../../Reducer/actions";
import { STRINGS } from "../../static/config";

const UpcomingMovies = () => {
  const { upcomingMovies } = useSelector((store) => store.movies);

  return (
    <Overview
      data={upcomingMovies}
      title={STRINGS.upcomingMovies}
      enableButtons={false}
      action={actions.fetchUpcomingMovies()}
    />
  );
};

export default UpcomingMovies;
