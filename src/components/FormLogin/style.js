import styled from "styled-components";

export const ContainerFromLogin = styled.div`
  width: 100%;
  height: 100%;
  background: rgb(180, 91, 58);
  background: linear-gradient(
    90deg,
    rgba(180, 91, 58, 1) 14%,
    rgba(253, 55, 29, 0.773546918767507) 46%,
    rgba(252, 69, 69, 1) 91%
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  overflow: hidden;
  form {
    width: 300px;
    height: 60%;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.4);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    .input-field {
      width: 90%;
      height: 50px;
      display: grid;
      grid-template-columns: 20% 80%;
      align-items: center;
      border-radius: 30px;
      box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.4);
      overflow: hidden;
      ::placeholder {
        color: #fff;
      }
      svg {
        margin-left: 15px;
        font-size: 25px;
        color: #fff;
      }
      input {
        width: 90%;
        height: 80%;
        background: none;
        border: none;
        outline: none;
        padding: 0 5px;
        font-size: 16px;
        font-weight: bold;
      }
    }
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
  }
  .social {
    width: 50%;
    height: 50px;
    display: grid;
    grid-template-columns: 20% 80%;
    align-items: center;
    justify-items: center;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    text-transform: capitalize;
    &:hover {
      background-color: #333;
      color: #fff;
    }
    svg {
      font-size: 30px;
      width: 100%;
      text-align: center;
    }
  }
`;
