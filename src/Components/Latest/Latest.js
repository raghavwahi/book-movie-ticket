import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Loading from "../../Layout/Loading/Loading";
import Strip from "../../Layout/Strip/Strip";
import actions from "../../Reducer/actions";
import { STRINGS } from "../../static/config";
import { filterData } from "../../Utils/filterData";

const Latest = () => {
  const { latestMovies } = useSelector((store) => store.movies);
  const { searchValue } = useSelector((store) => store.search);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [filteredLatestMovies, setFilteredLatestMovies] = useState([]);

  useEffect(() => {
    if (!latestMovies.length) {
      dispatch(actions.fetchLatestMovies());
    }
  }, [dispatch, latestMovies]);

  useEffect(() => {
    if (latestMovies.length) {
      setLoading(false);
    }
  }, [latestMovies]);

  useEffect(() => {
    setFilteredLatestMovies([...filterData(latestMovies, searchValue)]);
  }, [searchValue, latestMovies]);

  if (loading) {
    return <Loading />;
  }

  return (
    <main>
      <Strip
        data={filteredLatestMovies}
        title={STRINGS.latestMovies}
        enableButtons={true}
      />
    </main>
  );
};

export default Latest;
