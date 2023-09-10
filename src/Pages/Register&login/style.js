import styled from "styled-components";

export const PanelContainer = styled.div`
  position: relative;
  height: 100vh;
  .img-bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    z-index: -100;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: -150;
    }
  }
  .conten-box {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(4px);
    .form {
      width: 350px;
      height: 450px;
      background-color: rgba(255, 255, 255, 0.5);
      border-radius: 10px;
      box-shadow: 1px 1px 10px rgba(255, 255, 255, 0.5);
      backdrop-filter: blur(3px);
      display: flex;
      flex-direction: column;
      overflow: hidden;
      .carrousel {
        width: 80%;
        height: 50px;
        margin: 10px auto;
        .container-span {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: space-around;
          background-color: #fff;
          border-radius: 20px;
          border: 1px solid #fff;
          box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.4);
          overflow: hidden;
          .active {
            transform: translateX(100%);
          }
          .translate {
            position: absolute;
            top: 0;
            left: 0;
            background: rgb(180, 140, 58);
            background: linear-gradient(
              90deg,
              rgba(180, 140, 58, 1) 14%,
              rgba(253, 55, 29, 0.773546918767507) 46%,
              rgba(252, 69, 69, 1) 91%
            );
            width: 50%;
            height: 50px;
            border-radius: 20px;
            transition: 0.5s ease-in-out;
          }
          span {
            width: 50%;
            height: 100%;
            display: inline-block;
            line-height: 50px;
            text-align: center;
            font-size: 16px;
            font-weight: bold;
            z-index: 10;
            cursor: pointer;
          }
        }
      }
      .activeContent {
        transform: translateX(-50%);
        z-index: 100;
      }
      .form-content {
        width: 700px;
        height: calc(100% - 50px);
        display: flex;
        align-items: center;
        flex-wrap: nowrap;
        transition: all 0.5s ease-in-out;
      }
      .panel-login {
        width: 50%;
        height: 100%;
        display: flex;
        transition: all 0.5s ease-in-out;
      }
      .panel-register {
        width: 50%;
        height: 100%;
        display: flex;

        transition: all 0.5s ease-in-out;
      }
    }
  }
`;
