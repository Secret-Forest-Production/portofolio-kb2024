import React from "react";

const Button = ({ onClick, children, className = "" }) => (
    <button
        onClick={onClick}
        className={`bg-teal-600 text-white px-8 py-3 rounded-[3.5rem] hover:bg-teal-700 text-center font-jakarta` + className}
    >
        {children}
    </button>
);

export default Button;
