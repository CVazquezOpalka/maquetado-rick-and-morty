import styled from "styled-components"

export const ContainerCardContex = styled.div`
  width: 90%;
  min-height: 1200px;
  height: auto;
  padding: 50px 0;
  display: grid;
  grid-template-columns: repeat(4,1fr);
  grid-template-rows: repeat(3, 1fr);
  align-items: center;
  justify-items: center;
  gap: 50px;
`;