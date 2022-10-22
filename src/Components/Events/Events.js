import React from "react";
import { useSelector } from "react-redux";

import Overview from "../../Layout/Overview/Overview";
import actions from "../../Reducer/actions";
import { STRINGS } from "../../static/config";

const Events = () => {
  const { events } = useSelector((store) => store.movies);

  return (
    <Overview
      data={events}
      title={STRINGS.nearbyEvents}
      enableButtons={false}
      action={actions.fetchEvents()}
    />
  );
};

export default Events;
