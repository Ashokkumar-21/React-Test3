import React from "react";
import './styles/HeadDiv.css'
import '../images/AlderHey_Logo.png'

interface HeadDivProps {
addclass?:string;
}

export const HeadDiv: React.FC<HeadDivProps> = ({addclass}) => {
  return (
    <div className={`header-div ${addclass}`}>
        <h1 className="headerh1">Test Page</h1>
        <img className="headimg" src="../images/AlderHey_Logo.png" alt="Header Image" />
    </div>
  );
};