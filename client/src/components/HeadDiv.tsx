import React from "react";
import "./styles/HeadDiv.css";
import LogoImg from "../images/AlderHey_Logo.png";
import { Link } from "react-router-dom";

interface HeadDivProps {
  addclass?: string;
}

export const HeadDiv: React.FC<HeadDivProps> = ({ addclass }) => {
  return (
    <div className={`header-div ${addclass}`}>
      <Link to="/">
      <img className="headimg" src={LogoImg} />
      </Link>
      <h1 className="headerh1">Test Page</h1>
    </div>
  );
};
