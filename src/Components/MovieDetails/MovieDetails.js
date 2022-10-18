import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import ViewContainer from "../../Layout/ViewContainer/ViewContainer";
import actions from "../../Reducer/actions";

const MovieDetails = (props) => {
  const { movie } = useSelector((store) => store.movies);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(actions.fetchMovie({ id: props.id }));
  }, [dispatch, props.id]);

  useEffect(() => {
    if (movie._id) {
      setLoading(false);
    }
  }, [movie]);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  return <ViewContainer data={movie} />;
};

export default MovieDetails;
