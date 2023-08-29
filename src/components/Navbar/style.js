import styled from 'styled-components'

export const Header = styled.header`
  width: 100vw;
  height: 120px;
  display: grid;
  grid-template-rows: 80px 40px;
  place-items: center;
  background-color: #111;
  .img-logo {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    h1 {
      color: #fff;
      text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 40px #fff, 0 0 60px #fff,
        0 0 80px#fff;
    }
  }
  .navigaion {
    width: 90%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    span {
      padding: 10px 30px;
      font-size: 20px;
      display: inline-block;
      a {
        text-decoration: none;
        color: #fff;
        transition: 0.3s ease;
        &:hover {
          text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 40px #fff,
            0 0 60px #fff, 0 0 80px#fff;
        }
      }
    }
  }
`;
