import React, { useState, useContext } from "react";
import { UseAuth } from "../../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";
import { ContainerFromLogin } from "./style.js";
import { createUser } from "../../redux/register&login/action";
import { AiOutlineUser, AiOutlineLock } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { firebaseAuth } from "../../firebase.config";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";

export const FormLogin = () => {
  const auth = UseAuth();
  const navigate = useNavigate();
  
  const [formLogin, setFormLogin] = useState({
    email: "",
    password: "",
  });
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormLogin({
      ...formLogin,
      [name]: value,
    });
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formLogin;
    auth.signIn(email, password);
    navigate("/home");
  };
  const handleGoogle = (e) => {
    e.preventDefault();
    auth.loginWhitGoogle();
    navigate("/home");
  };

  onAuthStateChanged(firebaseAuth, (user) => {
    if (user) navigate("/home");
  });

  return (
    <ContainerFromLogin>
      <form action="POST" onSubmit={handleOnSubmit}>
        <div className="input-field">
          <AiOutlineUser />
          <input
            type="text"
            name="email"
            value={formLogin.email}
            onChange={handleOnChange}
            placeholder="Enter your email.. "
          />
        </div>
        <div className="input-field">
          <AiOutlineLock />
          <input
            type="password"
            name="password"
            value={formLogin.password}
            onChange={handleOnChange}
            placeholder="Enter your password..."
          />
        </div>
        <button>Login</button>
      </form>
      <button className="social" onClick={handleGoogle}>
        <FcGoogle /> login whit Google
      </button>
    </ContainerFromLogin>
  );
};
