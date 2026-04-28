import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  const layoutStyle = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#f8f9fa'
  };

  const contentContainerStyle = {
    display: 'flex',
    flex: 1,
    overflow: 'hidden',
    marginLeft: '256px',
    marginTop: '73px'
  };

  const mainStyle = {
    flex: 1,
    overflowY: 'auto',
    padding: '24px',
    backgroundColor: '#ffffff'
  };

  const maxWidthStyle = {
    maxWidth: '1280px',
    margin: '0 auto'
  };

  return (
    <div style={layoutStyle}>
      <Header />
      <Sidebar />
      <div style={contentContainerStyle}>
        <main style={mainStyle}>
          <div style={maxWidthStyle}>
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
