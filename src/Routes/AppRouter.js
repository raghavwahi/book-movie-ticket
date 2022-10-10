import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "../Layout/Navbar/Navbar";
import HomeRoute from "./HomeRoute";
import NotFoundRoute from "./NotFoundRoute";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeRoute />} />
        <Route path="*" element={<NotFoundRoute />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
