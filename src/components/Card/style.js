import styled from "styled-components";

export const CardContainer = styled.div`
  width: 210px;
  height: 210px;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(2px);
  border-radius: 10px;
  display: grid;
  grid-template-rows: 180px auto;
  grid-template-columns: 100%;
  place-items: center;
  transition: 0.5s ease-in-out;
  box-shadow: 1px 1px 10px rgba(255, 255, 255, 0.3);
  cursor: pointer;
  &:hover {
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.8);
  }
  img {
    width: 180px;
    height: 90%;
    border-radius: 50%;
  }
  p {
    color: #fff;
    text-transform: capitalize;
    letter-spacing: 1px;
    font-size: 20px;
    font-weight: 500px;
  }
`;
