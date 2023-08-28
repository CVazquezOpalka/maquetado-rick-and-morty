import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  HomePage,
  LandingPage,
  FavoritePage,
  DetailPage,
  RegisterAndlogin,
} from "../Pages/index";

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/" element={<LandingPage />} />
      <Route path="/" element={<FavoritePage />} />
      <Route path="/" element={<DetailPage />} />
      <Route path="/" element={<RegisterAndlogin />} />
    </Routes>
  );
};

export default MyRoutes;
