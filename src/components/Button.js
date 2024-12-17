import React from 'react';
import Image from 'next/image';

const Button = ({ text, onClick, className, icon, type = 'button' }) => {
  return (
    <button
      type={type} // Default is 'button', but can be 'submit' for form submission
      className={`btn ${className}`}
      onClick={onClick}
    >
      {icon && (
        <Image
          src={icon}
          width={30}
          height={30}
          alt={`${text} icon`}
          className="btn-icon"
        />
      )}
      {text}
    </button>
  );
};

export default Button;



