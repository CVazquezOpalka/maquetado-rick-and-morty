import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100vw;
  height: 40px;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  .social {
    position: absolute;
    bottom: 15px;
    left: 50%;
    transform: translateX(-50%);
    width: 300px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
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
      background: #0d64c1;
      color: #fff;
    }
    .github {
      background-color: #444;
      color: #fff;
    }
    .whatsapp {
      background-color: #1dfd33;
      color: #fff;
    }
  }
`;
