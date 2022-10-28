import React from "react";
import "./styles/HeadDiv.css";
import LogoImg from "../images/AlderHey_Logo.png";

interface HeadDivProps {
  addclass?: string;
}

export const HeadDiv: React.FC<HeadDivProps> = ({ addclass }) => {
  return (
    <div className={`header-div ${addclass}`}>
      <img className="headimg" src={LogoImg} />
      <h1 className="headerh1">Test Page</h1>
    </div>
  );
};
