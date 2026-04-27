import React from 'react';

const Card = ({ 
  title, 
  children, 
  className = '', 
  onClick, 
  ...props 
}) => {
  const cardStyle = {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    padding: '24px',
    marginBottom: '16px',
    transition: 'all 0.3s',
    cursor: onClick ? 'pointer' : 'default'
  };

  const titleStyle = {
    fontSize: '18px',
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: '16px',
    marginTop: 0
  };

  const contentStyle = {
    color: '#4b5563'
  };

  return (
    <div 
      style={cardStyle}
      onClick={onClick}
      {...props}
    >
      {title && (
        <h3 style={titleStyle}>
          {title}
        </h3>
      )}
      <div style={contentStyle}>
        {children}
      </div>
    </div>
  );
};

export default Card;
