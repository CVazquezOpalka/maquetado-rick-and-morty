import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  HomePage,
  LandingPage,
  FavoritePage,
  DetailPage,
  RegisterAndlogin,
} from "../Pages/index";
import { Navbar, Footer } from "../components/index";

const MyRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/favorite" element={<FavoritePage />} />
        <Route path="/character/:id" element={<DetailPage />} />
        <Route path="/auth" element={<RegisterAndlogin />} />
      </Routes>
      <Footer />
    </>
  );
};

export default MyRoutes;
