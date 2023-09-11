import React, { useState } from "react";
import { ContainerHome } from "./style";
import {
  Sidebar,
  CardContext,
  SearchBar,
  Pagination,
} from "../../components/index";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };
  const handleScroll = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <ContainerHome show={show}>
      <div className="search">
        <SearchBar />
      </div>

      <div className="contents">
        <div className="sidebar">
          <Sidebar show={show} handleShow={handleShow} />
        </div>
        <div className="content">
          <CardContext />
        </div>
      </div>
      <div className="paginate">
        <Pagination />
      </div>
      <div className="btn-slide">
        <button onClick={handleScroll}>subir</button>
      </div>
    </ContainerHome>
  );
};

export default HomePage;
