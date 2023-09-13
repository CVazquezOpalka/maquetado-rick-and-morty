import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ContainerFromLogin } from "./style.js";
import { AiOutlineUser, AiOutlineLock } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { firebaseAuth } from "../../firebase.config.js";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { isLogin } from "../../redux/user/action.js";

export const FormLogin = () => {
  const dispatch = useDispatch();

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
    const response = await signInWithEmailAndPassword(
      firebaseAuth,
      email,
      password
    );
    if (response) {
      dispatch(isLogin());
      setFormLogin({
        email: "",
        password: "",
      });
    }
  };
  const handleGoogle = async (e) => {
    e.preventDefault();
    const googleProvider = new GoogleAuthProvider();
    const response = await signInWithPopup(firebaseAuth, googleProvider);
    if (response) {
      dispatch(isLogin());
    }
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
            placeholder="Ingresa un email..."
          />
        </div>
        <div className="input-field">
          <AiOutlineLock />
          <input
            type="password"
            name="password"
            value={formLogin.password}
            onChange={handleOnChange}
            placeholder="ingresar contraseña..."
          />
        </div>
        <button>Iniciar Sesión</button>
      </form>
      <button className="social" onClick={handleGoogle}>
        <FcGoogle /> Iniciar sesión con Google
      </button>
    </ContainerFromLogin>
  );
};
