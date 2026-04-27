import React, { useState } from 'react';
import Input from '../common/Input';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const headerStyle = {
    position: 'sticky',
    top: 0,
    backgroundColor: '#ffffff',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
    zIndex: 50,
    borderBottom: '1px solid #e5e7eb'
  };

  const containerStyle = {
    padding: '16px 24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  };

  const leftSectionStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '16px'
  };

  const logoStyle = {
    width: '40px',
    height: '40px',
    backgroundColor: '#3b82f6',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '18px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
  };

  const titleStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#1f2937',
    display: 'none'
  };

  const searchContainerStyle = {
    flex: 1,
    maxWidth: '448px',
    margin: '0 32px'
  };

  const rightSectionStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '16px'
  };

  const buttonStyle = {
    padding: '10px',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    color: '#6b7280',
    borderRadius: '8px',
    transition: 'all 0.2s'
  };

  const userSectionStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    paddingLeft: '24px',
    borderLeft: '1px solid #e5e7eb'
  };

  const userInfoStyle = {
    textAlign: 'right',
    display: 'none'
  };

  const avatarStyle = {
    width: '40px',
    height: '40px',
    backgroundColor: '#6366f1',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontWeight: 'bold',
    cursor: 'pointer',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
  };

  return (
    <header style={headerStyle}>
      <div style={containerStyle}>
        <div style={leftSectionStyle}>
          <div style={logoStyle}>
            A
          </div>
          <h1 style={titleStyle}>Admin Dashboard</h1>
        </div>

        <div style={searchContainerStyle}>
          <Input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div style={rightSectionStyle}>
          <button style={buttonStyle} title="Notifications">
            <span style={{ fontSize: '20px' }}> notifications </span>
          </button>

          <button style={buttonStyle} title="Settings">
            <span style={{ fontSize: '20px' }}> settings </span>
          </button>

          <div style={userSectionStyle}>
            <div style={userInfoStyle}>
              <p style={{ fontSize: '14px', fontWeight: 600, color: '#1f2937', margin: 0 }}>Admin User</p>
              <p style={{ fontSize: '12px', color: '#6b7280', margin: 0 }}>Administrator</p>
            </div>
            <div style={avatarStyle}>
              U
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
