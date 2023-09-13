import React from "react";
import { Header } from "./style";
import { NavLink } from "react-router-dom";
import { RiShutDownLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {

  const navigate = useNavigate();
  const handleSignOut = async () => {

    navigate("/");
  };

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
        <span style={{ cursor: "pointer" }} onClick={handleSignOut}>
          <RiShutDownLine style={{ color: "red", fontSize: "30px" }} />
        </span>
      </nav>
    </Header>
  );
};
