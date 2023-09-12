import React from "react";
import styled from "styled-components";
import LoadingImg from "../../assets/loading.gif";

export const Loader = () => {
  return (
    <Container>
      <img src={LoadingImg} alt="Loading Image" />
      <h3>Cargando...</h3>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: rgb(63, 94, 251);
  background: radial-gradient(
    circle,
    rgba(63, 94, 251, 1) 0%,
    rgba(252, 70, 162, 1) 100%
  );
  img {
    border-radius: 50%;
  }
  h3 {
    color: #fff;
  }
`;
