import React from "react";
import "./Footer.css"
const Footer = ({modes}) => {
  return (
<div className={`foot ${modes ? 'dark' : 'normal'}`}>
        <p>
          © {new Date().getFullYear()} Created by Satya😎 and GPT😉. All rights reserved.
        </p>
        <div className="links">
          <a href="/about">About</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
  );
};

export default Footer;
