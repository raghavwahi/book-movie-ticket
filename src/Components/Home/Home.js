import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../Layout/Loading/Loading";

import actions from "../../Reducer/actions";
import { filterData } from "../../Utils/filterData";
import MoviesSlider from "./MoviesSlider";
import RecommendedMovies from "./RecommendedMovies";

const Home = () => {
  const { latestMovies, upcomingMovies } = useSelector((store) => store.movies);
  const { searchValue } = useSelector((store) => store.search);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [filteredLatestMovies, setFilteredLatestMovies] = useState([]);

  useEffect(() => {
    if (!latestMovies.length) {
      dispatch(actions.fetchLatestMovies());
    }
    if (!upcomingMovies.length) {
      dispatch(actions.fetchUpcomingMovies());
    }
  }, [dispatch, latestMovies, upcomingMovies]);

  useEffect(() => {
    if (latestMovies.length && upcomingMovies.length) {
      setLoading(false);
    }
  }, [latestMovies, upcomingMovies]);

  useEffect(() => {
    setFilteredLatestMovies([...filterData(latestMovies, searchValue)]);
  }, [searchValue, latestMovies]);

  if (loading) {
    return <Loading />;
  }

  return (
    <main>
      <MoviesSlider movies={[...upcomingMovies]} />
      <RecommendedMovies movies={filteredLatestMovies} />
    </main>
  );
};

export default Home;
