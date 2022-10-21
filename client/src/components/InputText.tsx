import React from "react";
import './styles/InputText.css'

interface InputTextProps {
  id?:string;
  type: 'text' | 'password'
  label?:string
}

export const InputText: React.FC<InputTextProps> = ({id,type,label}) => {
  return (
    <div className="input-grp-txt">
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} />
    </div>
  );
};
