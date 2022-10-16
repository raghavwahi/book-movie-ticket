import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import actions from "./actions";
import MoviesSlider from "./MoviesSlider";
import RecommendedMovies from "./RecommendedMovies";

const Home = () => {
  const { latestMovies, upcomingMovies } = useSelector((store) => store.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.fetchLatestMovies());
    dispatch(actions.fetchUpcomingMovies());
  }, [dispatch]);

  return (
    <main>
      <MoviesSlider movies={latestMovies} />
      <RecommendedMovies movies={upcomingMovies} />
    </main>
  );
};

export default Home;
