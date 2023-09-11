import styled from "styled-components";

export const WrapperSidebar = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  border-radius: 0 10px 10px 0;
  background-color: #111;

  .btn {
    position: absolute;
    top: 10%;
    left: 100%;
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
  .filters-selected {
    overflow: hidden;
    width: 100%;
    color: #fff;
    transition: all 0.3s ease-in;
    h2 {
      width: 100%;
      text-align: center;
      text-decoration: underline;
    }
    .filters {
      margin-top: 5px;
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      align-items: center;
      justify-content: center;
      span {
        position: relative;
        background-color: blue;
        font-weight: bold;
        padding: 6px 10px;
        border-radius: 5px;
        cursor: pointer;
        &::before {
          content: "x";
          position: absolute;
          top: -3px;
          left: -3px;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: blue;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
        }
      }
    }
  }
  .div-btn-clear {
    width: 100%;
    height: auto;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    .btn-clear {
      background-color: blue;
      border: none;
      padding: 5px 10px;
      border-radius: 5px;
      color: #fff;
      text-transform: capitalize;
      font-weight: bold;
      margin-bottom: 10px;
      transition: 0.3s ease-in-out;

      cursor: pointer;
      &:hover {
        background-color: #191567;
      }
    }
  }
`;
export const ItemContainer = styled.div`
  width: 100%;
  margin-bottom: 5px;
  padding: 10px 20px;
  overflow: hidden;
  .show {
    height: auto;
    max-height: 9999px;
    transition: all 0.5s cubic-bezier(1, 0, 1, 0);
  }
`;

export const TitleAcordion = styled.div`
  overflow: hidden;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

export const ContentAcordion = styled.div`
  color: #8b7f75;
  overflow: hidden;
  max-height: 0;
  transition: all 0.5s cubic-bezier(0, 1, 0, 1);
`;

export const InputField = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  gap: 5px;
`;
