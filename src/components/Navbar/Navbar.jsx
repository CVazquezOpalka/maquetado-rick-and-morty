import React from "react";
import { Header } from "./style";
import { NavLink } from "react-router-dom";


export const Navbar = () => {
 

  return (
    <Header>
      <div className="img-logo">
        <h1>Rick and Morty || APP</h1>
      </div>
      <nav className="navigaion">
        <span>
          <NavLink to="/home">Home</NavLink>
        </span>
        <span>
          <NavLink to="/favorite">Favorites</NavLink>
        </span>
        <span>
          <NavLink to="/auth">Login</NavLink>
        </span>
      </nav>
    </Header>
  );
};
