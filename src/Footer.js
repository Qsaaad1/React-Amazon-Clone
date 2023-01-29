import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer_link">
      <a target="Github repo" href="https://github.com/Qsaaad1">
        <p>Made By Saad Qureshi</p>
        <br />
      </a>
    </div>
  );
}

export default Footer;
