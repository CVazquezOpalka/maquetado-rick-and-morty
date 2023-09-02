import styled from "styled-components";

export const CardContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 210px;
  height: 340px;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(2px);
  border-radius: 10px;
  display: grid;
  grid-template-rows: 200px 30px 70px 40px;
  grid-template-columns: 100%;
  place-items: center;
  transition: 0.5s ease-in-out;
  box-shadow: 1px 1px 10px rgba(255, 255, 255, 0.3);
  cursor: pointer;
  &:hover {
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.8);
  }
  img {
    width: 100%;
    height: 100%;
  }
  p {
    color: #fff;
    text-transform: capitalize;
    letter-spacing: 1px;
    font-size: 20px;
    font-weight: 500px;
    width: 100%;
    line-height: 20px;
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
      &:hover {
        transform: scale(1.2);
      }
    }
  }
  .badge {
    position: absolute;
    top: 5px;
    right: 10px;
    padding: 3px 5px;
    border-radius: 5px;
    color: #fff;
    font-weight: bold;
  }
  .alive {
    background-color: green;
  }
  .dead {
    background-color: red;
  }
  .unknow {
    background-color: grey;
  }
`;
