import styled from "styled-components";

export const ContainerHome = styled.main`
  position: relative;
  width: 100%;
  min-height: 100vh;
  height: auto;
  background: rgb(63, 94, 251);
  background: radial-gradient(
    circle,
    rgba(63, 94, 251, 1) 0%,
    rgba(252, 70, 162, 1) 100%
  );
  .search {
    height: 130px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 30px;
  }
  .btn {
    position: absolute;
    top: 15%;
    left: ${({ show }) => (show ? "200px" : "0")};
    transition: 0.5s ease-in-out;
    button {
      width: 45px;
      height: 100px;
      background-color: #111;
      border: none;
      border-radius: 0 10px 10px 0;
      cursor: pointer;
      color: #fff;
      font-size: 16px;
      letter-spacing: 2px;
      display: flex;
      align-items: center;
      justify-content: center;
      p {
        height: 15px;
        transform: rotate(90deg);
      }
    }
  }
  .contents {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: ${({ show }) => (show ? "200px auto" : "0 auto")};
    align-items: center;
    justify-items: center;
    transition: 0.5s ease-in-out;
    .sidebar {
      width: ${({ show }) => (show ? "200px" : "0")};
      height: 95%;
      overflow: hidden;
      transition: 0.5s ease-in-out;
    }
    .content {
      width: ${({ show }) => (show ? "calc(1300px - 200px)" : "1300px")};
      height: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: 0.5s ease-in-out;
    }
  }
  .paginate {
    width: 90%;
    height: 70px;
    margin: 0 auto;
  }
`;
