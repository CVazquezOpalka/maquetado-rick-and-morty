import React, { useState } from "react";
import { ContainerFormRegister } from "./style.js";
import { AiOutlineUser, AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { firebaseAuth } from "../../firebase.config.js";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const FormRegister = ({ setIsClicked }) => {
  const navigate = useNavigate();
  const [formRegister, setFormRegister] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormRegister({
      ...formRegister,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { userName, email, password } = formRegister;
    const response = await createUserWithEmailAndPassword(
      firebaseAuth,
      email,
      password
    );
    if (response) {
      Swal.fire({
        icon: "success",
        title: "Registro de usuarios",
        html: `<p> Usuario Registrado con Exito</p>`,
        showDenyButton: false,
        denyButtonColor: "blue",
        confirmButtonText: "ok",
      }).then((response) => {
        if (response.isConfirmed) {
          setIsClicked(false);
          setFormRegister({
            userName: "",
            email: "",
            password: "",
          });
        }
      });
    }
  };

  return (
    <ContainerFormRegister>
      <form action="" onSubmit={handleSubmit}>
        <div className="input-field">
          <AiOutlineUser />
          <input
            type="text"
            name="userName"
            value={formRegister.userName}
            onChange={handleOnChange}
            placeholder="Ingresa tu nombre..."
          />
        </div>
        <div className="input-field">
          <AiOutlineMail />
          <input
            type="text"
            name="email"
            value={formRegister.email}
            onChange={handleOnChange}
            placeholder="Ingresa tu email..."
            autoComplete="off"
          />
        </div>
        <div className="input-field">
          <AiOutlineLock />
          <input
            type="password"
            name="password"
            value={formRegister.password}
            onChange={handleOnChange}
            placeholder="Contraseña ..."
            autoComplete="off"
          />
        </div>
        <button>Register</button>
      </form>
    </ContainerFormRegister>
  );
};
