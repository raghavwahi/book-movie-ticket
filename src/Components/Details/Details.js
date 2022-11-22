import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";

import DetailsContainer from "../../Layout/DetailsContainer/DetailsContainer";
import Loading from "../../Layout/Loading/Loading";
import { API_DATA } from "../../static/config";
import NotFound from "../Error/NotFound";

const Details = () => {
  const location = useLocation();
  const [bookingDetails, setBookingDetails] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (location.state) {
      setBookingDetails({
        ...location.state,
        imageUrl: `${API_DATA.qrUrl}${location.state.bookingId}`,
      });
      setLoading(false);
    }
  }, [location]);

  if (!bookingDetails.bookingId) {
    return <NotFound />;
  }

  if (loading) {
    return <Loading />;
  }
  return <DetailsContainer data={bookingDetails} />;
};

export default Details;
