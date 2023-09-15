import styled from "styled-components";

export const ContainerCardContex = styled.div`
  position: relative;
  width: 90%;
  min-height: 500px;
  height: auto;
  padding-bottom: 50px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  justify-items: center;
  gap: 40px;
  .img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    img{
      width: 600px;
      border-radius: 10px;
    }
    h3{
      color: #fff;
    }
  }
`;
