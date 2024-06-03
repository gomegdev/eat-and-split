import React from "react";

const Button = ({ children, className, handleToggleForm, onClick }) => {
  return (
    <button
      onClick={handleToggleForm || onClick}
      className={`rounded-lg bg-[#ffa94d] px-8 py-4 font-semibold text-black hover:bg-[#ffa94d]/50 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
