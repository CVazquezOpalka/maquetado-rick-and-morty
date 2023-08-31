import styled from "styled-components"

export const ContainerCardContex = styled.div`
  width: 90%;
  height: 100%;
  padding: 50px 0;
  display: grid;
  grid-template-columns: repeat(4,1fr);
  grid-template-rows: repeat(5, 1fr);
  align-items: center;
  justify-items: center;
  gap: 40px;
`;