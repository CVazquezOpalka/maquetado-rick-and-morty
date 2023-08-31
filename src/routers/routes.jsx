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

  const showNav = location.pathname === "/home" || location.pathname === "/" || location.pathname === "/favorite";
  const showFoot = location.pathname === "/home" || location.pathname === "/";
 
  return (
    <>
      {showNav && <Navbar />}
      
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/favorite" element={<FavoritePage />} />
        <Route path="/character/:id" element={<DetailPage />} />
        <Route path="/auth" element={<RegisterAndlogin />} />
      </Routes>
      {showFoot && <Footer />}
    </>
  );
};

export default MyRoutes;
