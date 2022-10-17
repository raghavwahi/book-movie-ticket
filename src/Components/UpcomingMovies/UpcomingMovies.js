import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Strip from "../../Layout/Strip/Strip";
import actions from "../../Reducer/actions";
import { STRINGS } from "../../static/config";

const UpcomingMovies = () => {
  const { upcomingMovies } = useSelector((store) => store.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.fetchUpcomingMovies());
  }, [dispatch]);

  return (
    <main>
      <Strip data={upcomingMovies} title={STRINGS.upcomingMovies} />
    </main>
  );
};

export default UpcomingMovies;
