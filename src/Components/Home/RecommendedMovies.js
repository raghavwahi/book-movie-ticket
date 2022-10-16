import React from "react";

import Strip from "../../Layout/Strip/Strip";
import { STRINGS } from "../../static/config";

const RecommendedMovies = (props) => {
  return <Strip data={props.movies} title={STRINGS.recommendedMovies} />;
};

export default RecommendedMovies;
