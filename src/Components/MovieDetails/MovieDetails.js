import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Loading from "../../Layout/Loading/Loading";
import NotFound from "../NotFound/NotFound";
import ViewContainer from "../../Layout/ViewContainer/ViewContainer";
import actions from "../../Components/MovieDetails/actions";
import { PARAMS } from "../../static/config";

const MovieDetails = (props) => {
  const { movie } = useSelector((store) => store.movie);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [loadFailed, setLoadFailed] = useState(false);

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

  useEffect(() => {
    // Handle the issue of render first and then error 404
    const timerId = setTimeout(() => {
      if (movie._id) {
        clearTimeout(timerId);
      }
      if (!movie._id) {
        setLoadFailed(true);
      }
    }, PARAMS.pageTimeout);
  }, [movie._id]);

  if (loadFailed) {
    return <NotFound />;
  }
  if (loading) {
    return <Loading />;
  }

  return <ViewContainer data={movie} />;
};

export default MovieDetails;
