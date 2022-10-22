import React from "react";
import './styles/LoginBtn.css'

interface LoginBtnProps {
    type: 'submit' | 'reset'
    value?:string;
    addclass?:string;
}

export const LoginBtn: React.FC<LoginBtnProps> = ({type,value,addclass}) => {
  return (
    <div>
        <button className={`login-btn ${addclass}`} type={type} value={value}>Login</button>
    </div>
  );
};