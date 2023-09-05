import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import {
  HomePage,
  LandingPage,
  FavoritePage,
  DetailPage,
  RegisterAndlogin,
} from "../Pages/index";
import { Navbar, Footer } from "../components/index";

const MyRoutes = () => {
  const location = useLocation();

  const showNav =
    location.pathname === "/home" ||
    location.pathname === "/favorite";
  const showFoot = location.pathname === "/home";

  return (
    <>
      {showNav && <Navbar />}

      <Routes>
        <Route path="/" element={<RegisterAndlogin />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/favorite" element={<FavoritePage />} />
        <Route path="/character/:id" element={<DetailPage />} />
      </Routes>
      {showFoot && <Footer />}
    </>
  );
};

export default MyRoutes;
