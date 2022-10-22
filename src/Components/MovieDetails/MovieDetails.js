import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Loading from "../../Layout/Loading/Loading";
import ViewContainer from "../../Layout/ViewContainer/ViewContainer";
import actions from "../../Components/MovieDetails/actions";

const MovieDetails = (props) => {
  const { movie } = useSelector((store) => store.movie);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (movie._id !== props.id) {
      movie._id = "";
      dispatch(actions.fetchMovie({ id: props.id }));
    }
  }, [dispatch, props.id, movie]);

  useEffect(() => {
    if (movie._id) {
      setLoading(false);
    }
  }, [movie]);

  if (loading) {
    return <Loading />;
  }

  return <ViewContainer data={movie} />;
};

export default MovieDetails;
