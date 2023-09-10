import React, { useEffect, useState } from "react";
import { UseAuth } from "../../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";
import { ContainerFromLogin } from "./style.js";
import { AiOutlineUser, AiOutlineLock } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";


export const FormLogin = () => {
  const auth = UseAuth();
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
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
    setIsLogin(true);
    navigate("/home");
    setFormLogin({
      email: "",
      password: "",
    });
  };
  const handleGoogle = (e) => {
    e.preventDefault();
    auth.loginWhitGoogle();
    navigate("/home");
  };



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
