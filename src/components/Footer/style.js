import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100vw;
  height: 60px;
  background-color: #111;
  display: flex;
  align-items: center;
  justify-content: center;
  .social {
    width: 300px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    a {
      display: inline-block;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      text-decoration: none;
      font-size: 30px;
      text-align: center;
      line-height: 60px;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: scale(1.1);
      }
    }
    .linkedin {
      background: blue;
      color: #fff;
    }
    .github {
      background-color: #444;
      color: #fff;
    }
    .whatsapp {
      background-color: green;
      color: #fff;
    }
  }
`;
