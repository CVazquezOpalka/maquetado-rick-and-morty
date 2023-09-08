import React, { useState, useEffect } from "react";
import ImgBg from "../../assets/allPlanets.jpg";
import { PanelContainer } from "./style";
import { FormLogin } from "../../components/FormLogin/FormLogin";
import { FormRegister } from "../../components/FormRegister/FormRegister";
import { useNavigate } from "react-router-dom";


const RegisterAndlogin = () => {
  const [isClicked, setIsClicked] = useState(false);

 

  return (
    <PanelContainer>
      <div className="img-bg">
        <img src={ImgBg} alt="logo" />
      </div>
      <div className="conten-box">
        <div className="form">
          <div className="carrousel">
            <div className="container-span">
              <div className={`translate ${isClicked ? "active" : ""}`} />
              <span onClick={() => setIsClicked(false)}>Login</span>
              <span onClick={() => setIsClicked(true)}>Register</span>
            </div>
          </div>
          <div className={`form-content ${isClicked ? "activeContent" : ""}`}>
            <div className="panel-login">
              <FormLogin />
            </div>
            <div className={`panel-register `}>
              <FormRegister setIsClicked={setIsClicked} />
            </div>
          </div>
        </div>
      </div>
    </PanelContainer>
  );
};

export default RegisterAndlogin;
