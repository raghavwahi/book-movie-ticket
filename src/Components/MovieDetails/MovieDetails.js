import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Loading from "../../Layout/Loading/Loading";
import ViewContainer from "../../Layout/ViewContainer/ViewContainer";
import actions from "../../Components/MovieDetails/actions";
import { useNavigate } from "react-router";
import { API_DATA } from "../../static/config";

const MovieDetails = (props) => {
  const { movie } = useSelector((store) => store.movie);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate(`/${API_DATA.book}`, { state: { id: movie.id } });
  };

  useEffect(() => {
    if (movie.id !== props.id) {
      movie.id = "";
      dispatch(actions.fetchMovie({ id: props.id }));
    }
  }, [dispatch, props.id, movie]);

  useEffect(() => {
    if (movie.id) {
      setLoading(false);
    }
  }, [movie]);

  if (loading) {
    return <Loading />;
  }

  return <ViewContainer data={movie} onClick={onClickHandler} />;
};

export default MovieDetails;
