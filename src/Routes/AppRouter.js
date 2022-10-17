import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "../Layout/Navbar/Navbar";
import { API_DATA } from "../static/config";
import EventsRoute from "./EventsRoute";
import HomeRoute from "./HomeRoute";
import LatestRoute from "./LatestRoute";
import MovieRoute from "./MovieRoute";
import NotFoundRoute from "./NotFoundRoute";
import UpcomingMoviesRoute from "./UpcomingMoviesRoute";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeRoute />} />
        <Route path={`/${API_DATA.latest}`} element={<LatestRoute />} />
        <Route path={`/${API_DATA.latest}:id`} element={<MovieRoute />} />
        <Route
          path={`/${API_DATA.upcomingMovies}`}
          element={<UpcomingMoviesRoute />}
        />
        <Route path={`/${API_DATA.events}`} element={<EventsRoute />} />
        <Route path="*" element={<NotFoundRoute />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
