import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Strip from "../../Layout/Strip/Strip";
import actions from "../../Reducer/actions";
import { STRINGS } from "../../static/config";

const Latest = () => {
  const { latestMovies } = useSelector((store) => store.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.fetchLatestMovies());
  }, [dispatch]);

  return (
    <main>
      <Strip
        data={latestMovies}
        title={STRINGS.latestMovies}
        enableButtons={true}
      />
    </main>
  );
};

export default Latest;
