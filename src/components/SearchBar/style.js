import styled from "styled-components";

export const ContainerSearch = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .oculto {
    margin-top: 10px;
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    p {
      color: #fff;
      font-size: 20px;
      font-weight: bold;
    }
    button {
      padding: 3px 7px;
      border-radius: 8px;
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: blue;
      color: #fff;
      font-size: 16px;
      text-transform: uppercase;
      font-weight: bold;
      transition: 0.3s ease-in-out;
      cursor: pointer;
      &:hover {
        background-color: #191567;
      }
    }
  }
  form {
    width: 83%;
    height: 100%;
    margin: 0 auto;
    .input-form {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;
      button {
        padding: 10px 15px;
        border-radius: 8px;
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: blue;
        color: #fff;
        font-size: 16px;
        text-transform: uppercase;
        font-weight: bold;
        transition: 0.3s ease-in-out;
        cursor: pointer;
        &:hover {
          background-color: #191567;
        }
      }
      input {
        width: 400px;
        height: 43px;
        padding: 10px;
        border-radius: 8px;
        border: none;
        outline: none;
        font-size: 16px;
      }
    }
  }
`;
