import React from "react";
import './styles/LoginBtn.css'

interface LoginBtnProps {
    type: 'submit' | 'reset'
    value?:string;
    addclass?:string;
    text?:string;
}

export const LoginBtn: React.FC<LoginBtnProps> = ({type,value,addclass,text}) => {
  return (
    <div>
        <button className={`btn ${addclass}`} type={type} value={value}>{text}</button>
    </div>
  );
};