import React from "react";
import styled from "styled-components";

export const HeaderDetail = () => {
  return (
    <Container>
      <h1>Detalle del personaje</h1>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 80px;
  background-color: #111;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  letter-spacing: 3px;
  text-transform: capitalize;
`;
