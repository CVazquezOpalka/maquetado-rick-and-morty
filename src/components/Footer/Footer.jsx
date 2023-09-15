import React from "react";
import { FooterContainer } from "./style";

import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineWhatsApp,
} from "react-icons/ai";

export const Footer = () => {
  return (
    <FooterContainer>
      <div className="social">
        <a
          className="linkedin"
          href="https://www.linkedin.com/in/cristian-miguel-vazquez-opalka/"
          target="_blank"
        >
          <span>
            <AiFillLinkedin />
          </span>
        </a>
        <a
          className="github"
          href="https://github.com/CVazquezOpalka/"
          target="_blank"
        >
          <span>
            <AiFillGithub />
          </span>
        </a>
        <a className="whatsapp" href="https://wa.me/3888314283" target="_blank">
          <span>
            <AiOutlineWhatsApp />
          </span>
        </a>
      </div>
    </FooterContainer>
  );
};
