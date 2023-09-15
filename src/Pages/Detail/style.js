import styled from "styled-components"

export const DetailContainer = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 80px);
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-template-areas:
    "t1 t1 t1 t1 t1 t1"
    "i1 i1 c1 c1 c1 c1"
    "i1 i1 c1 c1 c1 c1"
    "i1 i1 c1 c1 c1 c1";
  .btn {
    position: absolute;
    top: 100px;
    left: 50px;
    width: 50px;
    height: 50px;
    button {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background: #fff;
      border: none;
      font-size: 25px;
      transition: 0.3s ease-in-out;
      display: flex;
      align-items: center;
      justify-content: center;
      &:hover {
        transform: scale(1.2);
        background-color: #333;
        color: #fff;
      }
    }
  }
`;

export const TitleContainer = styled.div`
  grid-area: t1;

  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    letter-spacing: 5px;
    font-size: 50px;
    font-weight: bold;
    text-transform: uppercase;
    span {
      font-weight: 200;
    }
  }
`;
export const ImageContainer = styled.div`
  grid-area: i1;

  display: flex;
  align-items: center;
  justify-content: center;
  img {
    border-radius: 20px;
    width: 360px;
    object-fit: cover;
  }
`;
export const ContentContainer = styled.div`
  grid-area: c1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  .content {
    width: 40%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    span {
      font-size: 30px;
      font-weight: 500;
      letter-spacing: 2px;
      text-transform: uppercase;
      text-decoration: underline;
    }
    h3 {
      font-size: 30px;
      font-weight: 300;
      text-transform: capitalize;
    }
  }
`;
