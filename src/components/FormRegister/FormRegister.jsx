import React, { useState } from "react";
import { ContainerFormRegister } from "./style.js";
import { AiOutlineUser, AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import { UseAuth } from "../../context/AuthContext.jsx";
import Swal from "sweetalert2";

export const FormRegister = ({ setIsClicked }) => {
  const auth = UseAuth();
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
    auth.register(email, password);
    Swal.fire("user created successfully", "", "success");
    setIsClicked(false);
    setFormRegister({
      userName: "",
      email: "",
      password: "",
    });
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
            placeholder="Enter your username..."
          />
        </div>
        <div className="input-field">
          <AiOutlineMail />
          <input
            type="text"
            name="email"
            value={formRegister.email}
            onChange={handleOnChange}
            placeholder="Enter your email..."
          />
        </div>
        <div className="input-field">
          <AiOutlineLock />
          <input
            type="password"
            name="password"
            value={formRegister.password}
            onChange={handleOnChange}
            placeholder="Enter your password ..."
          />
        </div>
        <button>Register</button>
      </form>
    </ContainerFormRegister>
  );
};
