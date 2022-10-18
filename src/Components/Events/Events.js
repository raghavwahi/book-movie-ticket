import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Navbar from "./../../Layout/Navbar/Navbar";
import actions from "../../Reducer/actions";
import { STRINGS } from "../../static/config";
import Strip from "../../Layout/Strip/Strip";
import Loading from "../../Layout/Loading/Loading";
import { filterData } from "../../Utils/filterData";

const Events = () => {
  const { events } = useSelector((store) => store.movies);
  const { searchValue } = useSelector((store) => store.search);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [filteredLatestMovies, setFilteredLatestMovies] = useState([]);

  useEffect(() => {
    if (!events.length) {
      dispatch(actions.fetchEvents());
    }
  }, [dispatch, events]);

  useEffect(() => {
    if (events.length) {
      setLoading(false);
    }
  }, [events]);

  useEffect(() => {
    setFilteredLatestMovies([...filterData(events, searchValue)]);
  }, [searchValue, events]);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Navbar />
      <main>
        <Strip
          data={filteredLatestMovies}
          title={STRINGS.nearbyEvents}
          enableButtons={false}
        />
      </main>
    </>
  );
};

export default Events;
