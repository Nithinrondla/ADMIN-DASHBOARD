import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path) => {
    if (path === '/dashboard') {
      return location.pathname === '/dashboard' || location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const navItems = [
    { label: 'Dashboard', path: '/dashboard' },
    { label: 'Bookings', path: '/bookings' },
    { label: 'Details', path: '/details/1' },
  ];

  const handleLogout = () => {
    navigate('/login');
  };

  const sidebarStyle = {
    width: '256px',
    backgroundColor: '#1f2937',
    color: 'white',
    height: '100%',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column'
  };

  const navStyle = {
    flex: 1,
    padding: '16px 24px'
  };

  const navListStyle = {
    listStyle: 'none',
    padding: 0,
    margin: 0
  };

  const navItemStyle = {
    marginBottom: '8px'
  };

  const getLinkStyle = (isActive) => ({
    display: 'flex',
    alignItems: 'center',
    padding: '12px 16px',
    borderRadius: '8px',
    textDecoration: 'none',
    color: isActive ? 'white' : '#d1d5db',
    backgroundColor: isActive ? '#3b82f6' : 'transparent',
    transition: 'all 0.2s',
    cursor: 'pointer'
  });

  const logoutSectionStyle = {
    padding: '16px 24px',
    borderTop: '1px solid #374151'
  };

  const logoutButtonStyle = {
    width: '100%',
    padding: '12px 16px',
    borderRadius: '8px',
    backgroundColor: '#dc2626',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '500',
    transition: 'all 0.2s'
  };

  return (
    <aside style={sidebarStyle}>
      <nav style={navStyle}>
        <ul style={navListStyle}>
          {navItems.map((item) => (
            <li key={item.path} style={navItemStyle}>
              <Link
                to={item.path}
                style={getLinkStyle(isActive(item.path))}
              >
                <span style={{ marginRight: '12px' }}>
                  {item.label === 'Dashboard' ? ' dashboard ' : item.label === 'Bookings' ? ' bookings ' : ' details '}
                </span>
                <span style={{ fontWeight: '500' }}>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div style={logoutSectionStyle}>
        <button
          onClick={handleLogout}
          style={logoutButtonStyle}
        >
          <span style={{ marginRight: '8px' }}> logout </span>
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
