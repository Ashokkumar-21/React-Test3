import React from "react";
import './styles/HeadDiv.css'

interface HeadDivProps {
addclass?:string;
}

export const HeadDiv: React.FC<HeadDivProps> = ({addclass}) => {
  return (
    <div className={`header-div ${addclass}`}>
        
    </div>
  );
};