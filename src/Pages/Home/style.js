import styled from "styled-components";

export const ContainerHome = styled.main`
  padding-bottom: 30px;
  position: relative;
  width: 100%;
  height: auto;
  .search {
    height: 130px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 30px;
  }
  .contents {
    width: 100%;
    display: grid;
    grid-template-columns: ${({ show }) => (show ? "200px auto" : "0 auto")};
    align-items: start;
    justify-items: center;
    transition: 0.5s ease-in-out;
    .sidebar {
      width: ${({ show }) => (show ? "200px" : "0")};
      height: auto;
      transition: 0.5s ease-in-out;
    }
    .content {
      width: ${({ show }) => (show ? "calc(1300px - 200px)" : "1300px")};
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
  .btn-slide {
    position: absolute;
    bottom: -25px;
    right: 10px;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
    button {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      border: none;
      background-color: blue;
      font-size: 18px;
      color: #fff;
      cursor: pointer;
      transition: 0.3s ease-in-out;
      &:hover {
        background: #191567;
      }
    }
  }
`;
