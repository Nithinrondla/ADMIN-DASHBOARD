import React from 'react';

const Input = ({ type = 'text', placeholder, value, onChange, style = {} }) => {
  const defaultStyle = {
    padding: '0.5rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '1rem',
    width: '100%',
    ...style
  };

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={defaultStyle}
    />
  );
};

export default Input;
