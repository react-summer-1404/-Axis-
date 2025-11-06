import React from "react";

const Button = ({ children, className = "", onClick, type = "button" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={"mt-6 bg-blue-400 text-white 900 px-10 py-3 rounded-full"}
    >
      {children}
    </button>
  );
};

export default Button;
