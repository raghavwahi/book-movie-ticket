import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Loading from "../../Layout/Loading/Loading";
import Strip from "../../Layout/Strip/Strip";
import actions from "../../Reducer/actions";
import { STRINGS } from "../../static/config";
import { filterData } from "../../Utils/filterData";

const UpcomingMovies = () => {
  const { upcomingMovies } = useSelector((store) => store.movies);
  const { searchValue } = useSelector((store) => store.search);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [filteredLatestMovies, setFilteredLatestMovies] = useState([]);

  useEffect(() => {
    if (!upcomingMovies.length) {
      dispatch(actions.fetchUpcomingMovies());
    }
  }, [dispatch, upcomingMovies]);

  useEffect(() => {
    if (upcomingMovies.length) {
      setLoading(false);
    }
  }, [upcomingMovies]);

  useEffect(() => {
    setFilteredLatestMovies([...filterData(upcomingMovies, searchValue)]);
  }, [searchValue, upcomingMovies]);

  if (loading) {
    return <Loading />;
  }

  return (
    <main>
      <Strip
        data={filteredLatestMovies}
        title={STRINGS.upcomingMovies}
        enableButtons={false}
      />
    </main>
  );
};

export default UpcomingMovies;
