import styled from "styled-components";

export const CardContainer = styled.div`
  width: 210px;
  height: 340px;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(2px);
  border-radius: 10px;
  display: grid;
  grid-template-rows: 200px 50px 50px 40px;
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
    width: 100%;
    text-align: center;
    font-weight: bold;
  }
  .btn-container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
   
    button {
      padding: 5px 10px;
      margin-bottom: 5px;
      z-index: 10;
      background: none;
      border: none;
      font-size: 20px;
      cursor: pointer;
      transition: 0.3s ease-in;
      &:hover{
        transform: scale(1.2)
      }
    }
  }
`;
