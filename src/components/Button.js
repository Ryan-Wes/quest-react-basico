import React from 'react';

const Button = ({ label }) => {
  const handleClick = () => {
    alert(`A label desse botão é ${label}`);
  };

  return (
    <button onClick={handleClick}>
      {label}
    </button>
  );
};

export default Button;
