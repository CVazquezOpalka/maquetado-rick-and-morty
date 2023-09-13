import React from "react";
import { Header } from "./style";
import { NavLink } from "react-router-dom";
import { RiShutDownLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { firebaseAuth } from "../../firebase.config";
import { signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { isLogout } from "../../redux/user/action";

export const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSignOut = async () => {
    const response = await signOut(firebaseAuth);
    dispatch(isLogout());
    navigate("/");
  };

  return (
    <Header>
      <div className="img-logo">
        <h1>Rick and Morty || APP</h1>
      </div>
      <nav className="navigaion">
        <span>
          <NavLink to="/home">Personajes</NavLink>
        </span>
        <span>
          <NavLink to="/favorite">Favoritos</NavLink>
        </span>
        <span style={{ cursor: "pointer" }} onClick={handleSignOut}>
          <RiShutDownLine style={{ color: "red", fontSize: "30px" }} />
        </span>
      </nav>
    </Header>
  );
};
