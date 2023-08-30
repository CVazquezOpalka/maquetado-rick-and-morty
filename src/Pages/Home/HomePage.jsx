import React, { useState } from "react";
import { ContainerHome } from "./style";
import { Sidebar, CardContext } from "../../components/index";

const HomePage = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };
  return (
    <ContainerHome show={show}>
      <div className="btn">
        <button onClick={handleShow}>
          <p>Filtros</p>
        </button>
      </div>
      <div className="content">

        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="content">
          <CardContext />
        </div>
      </div>
    </ContainerHome>
  );
};

export default HomePage;
