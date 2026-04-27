import React from 'react';

const Input = ({ 
  type = 'text', 
  placeholder, 
  value, 
  onChange, 
  error = false,
  errorText,
  label,
  className = '',
  ...props 
}) => {
  const containerStyle = {
    marginBottom: '16px'
  };

  const labelStyle = {
    display: 'block',
    fontSize: '14px',
    fontWeight: '500',
    marginBottom: '8px',
    color: error ? '#dc2626' : '#374151'
  };

  const inputStyle = {
    width: '100%',
    padding: '12px 16px',
    borderRadius: '8px',
    border: error ? '2px solid #dc2626' : '1px solid #d1d5db',
    fontSize: '14px',
    color: '#1f2937',
    backgroundColor: '#ffffff',
    outline: 'none',
    transition: 'all 0.2s'
  };

  const errorStyle = {
    marginTop: '8px',
    fontSize: '12px',
    color: '#dc2626'
  };

  return (
    <div style={containerStyle}>
      {label && (
        <label style={labelStyle}>
          {label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={inputStyle}
        {...props}
      />
      {error && errorText && (
        <p style={errorStyle}>
          {errorText}
        </p>
      )}
    </div>
  );
};

export default Input;
