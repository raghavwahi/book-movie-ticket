import React from "react";
import { useParams } from "react-router";

const MovieRoute = () => {
  const { id } = useParams();

  return <h1>Movie {id}</h1>;
};

export default MovieRoute;
