import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import actions from "../../Reducer/actions";
import { STRINGS } from "../../static/config";
import Strip from "../../Layout/Strip/Strip";

const Events = () => {
  const { events } = useSelector((store) => store.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.fetchEvents());
  }, [dispatch]);

  return (
    <main>
      <Strip data={events} title={STRINGS.nearbyEvents} />
    </main>
  );
};

export default Events;
