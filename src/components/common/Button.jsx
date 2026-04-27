import React from 'react';

const Button = ({ 
  children, 
  onClick, 
  type = 'button', 
  variant = 'primary',
  disabled = false,
  className = '',
  ...props 
}) => {
  const getButtonStyle = () => {
    const baseStyle = {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '10px 20px',
      borderRadius: '8px',
      fontWeight: '500',
      fontSize: '14px',
      border: 'none',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'all 0.2s',
      outline: 'none'
    };

    const variants = {
      primary: {
        backgroundColor: disabled ? '#9ca3af' : '#3b82f6',
        color: 'white',
        boxShadow: disabled ? 'none' : '0 4px 6px rgba(0, 0, 0, 0.1)'
      },
      secondary: {
        backgroundColor: disabled ? '#f3f4f6' : '#f9fafb',
        color: disabled ? '#9ca3af' : '#1f2937',
        border: `1px solid ${disabled ? '#e5e7eb' : '#d1d5db'}`
      },
      danger: {
        backgroundColor: disabled ? '#f87171' : '#dc2626',
        color: 'white',
        boxShadow: disabled ? 'none' : '0 4px 6px rgba(0, 0, 0, 0.1)'
      },
      outline: {
        backgroundColor: 'transparent',
        color: disabled ? '#9ca3af' : '#3b82f6',
        border: `2px solid ${disabled ? '#d1d5db' : '#3b82f6'}`
      }
    };

    return { ...baseStyle, ...variants[variant] };
  };

  const buttonStyle = getButtonStyle();

  return (
    <button 
      type={type} 
      onClick={onClick} 
      disabled={disabled}
      style={buttonStyle}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
