import React from "react";
import { useParams } from "react-router";
import MovieDetails from "../Components/MovieDetails/MovieDetails";

const MovieRoute = () => {
  const { id } = useParams();

  return <MovieDetails id={id} />;
};

export default MovieRoute;
