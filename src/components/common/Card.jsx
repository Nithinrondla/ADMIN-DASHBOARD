import React from 'react';

const Card = ({ title, children, style = {} }) => {
  const defaultStyle = {
    border: '1px solid #e9ecef',
    borderRadius: '8px',
    padding: '1rem',
    margin: '1rem 0',
    backgroundColor: 'white',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    ...style
  };

  return (
    <div style={defaultStyle}>
      {title && <h3 style={{ marginTop: 0 }}>{title}</h3>}
      {children}
    </div>
  );
};

export default Card;
