import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { v4 } from "uuid";

import NotFound from "../Error/NotFound";
import actions from "../MovieDetails/actions";
import Loading from "../../Layout/Loading/Loading";
import BookContainer from "../../Layout/BookContainer/BookContainer";
import { useNavigate } from "react-router";
import { API_DATA, PARAMS } from "../../static/config";

const Booking = () => {
  const { movie } = useSelector((store) => store.movie);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [seatCount, setSeatCount] = useState(1);
  let id;

  if (location.state) {
    id = location.state.id;
  }

  const onClickHandler = (count) => {
    const bookingId = v4();
    navigate(`/${API_DATA.details}`, {
      state: {
        name: movie.name,
        seatCount: seatCount,
        date: PARAMS.date,
        bookingId: bookingId,
      },
    });
  };

  useEffect(() => {
    if (!(movie.id && movie.id === id)) {
      movie.id = "";
      dispatch(actions.fetchMovie({ id }));
    }
  }, [dispatch, id, movie]);

  useEffect(() => {
    if (movie.id) {
      setLoading(false);
    }
  }, [movie]);

  const addSeatHandler = () => {
    if (seatCount + 1 <= 10) {
      setSeatCount(seatCount + 1);
    }
  };

  const removeSeatHandler = () => {
    if (seatCount > 1) {
      setSeatCount(seatCount - 1);
    }
  };

  if (!id) {
    return <NotFound />;
  }

  if (loading) {
    return <Loading />;
  }
  return (
    <BookContainer
      data={movie}
      onClick={onClickHandler}
      removeSeatHandler={removeSeatHandler}
      addSeatHandler={addSeatHandler}
      seatCount={seatCount}
    />
  );
};

export default Booking;
