import React, { useState } from "react";
import { ContainerHome } from "./style";
import {
  Sidebar,
  CardContext,
  SearchBar,
  Pagination,
} from "../../components/index";
import { firebaseAuth } from "../../firebase.config";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };
  onAuthStateChanged(firebaseAuth, (user) => {
    if (!user) navigate("/");
  });
  return (
    <ContainerHome show={show}>
      <div className="search">
        <SearchBar />
      </div>
      <div className="btn">
        <button onClick={handleShow}>
          <p>Filtros</p>
        </button>
      </div>
      <div className="contents">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="content">
          <CardContext />
        </div>
      </div>
      <div className="paginate">
        <Pagination />
      </div>
    </ContainerHome>
  );
};

export default HomePage;
