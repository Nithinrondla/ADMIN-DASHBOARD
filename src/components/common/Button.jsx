import React from 'react';

const Button = ({ children, onClick, type = 'button', style = {} }) => {
  const defaultStyle = {
    padding: '0.5rem 1rem',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '1rem',
    ...style
  };

  return (
    <button type={type} onClick={onClick} style={defaultStyle}>
      {children}
    </button>
  );
};

export default Button;
