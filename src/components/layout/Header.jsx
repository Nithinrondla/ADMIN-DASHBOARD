import React from 'react';
import Button from '../common/Button';

const Header = () => {
  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', backgroundColor: '#f8f9fa', borderBottom: '1px solid #e9ecef' }}>
      <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
        Logo
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <input type="text" placeholder="Search..." style={{ padding: '0.5rem', marginRight: '1rem', border: '1px solid #ccc', borderRadius: '4px' }} />
        <Button><div style={{ fontSize: '1rem' }}>
          Profile
        </div></Button>
      </div>
    </header>
  );
};

export default Header;
