import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "../../Layout/Slider/Slider";
import actions from "./actions";

const Home = () => {
  const { movies, recommendedMovies } = useSelector((store) => store.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.fetchMovies());
    dispatch(actions.fetchRecommendedMovies());
  }, [dispatch]);

  return (
    <main>
        <Slider data={movies}/>
    </main>
  )
};

export default Home;
