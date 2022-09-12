import React from "react";

const Button = ({ text, className }) => {
  return <button className={`buttons  ${className}`}>{text}</button>
};

export default Button;