import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside style={{ width: '200px', backgroundColor: '#343a40', color: 'white', padding: '1rem', height: '100vh' }}>
      <nav>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: '1rem' }}><Link to="/dashboard" style={{ color: 'white', textDecoration: 'none' }}>Dashboard</Link></li>
          <li style={{ marginBottom: '1rem' }}><Link to="/bookings" style={{ color: 'white', textDecoration: 'none' }}>Bookings</Link></li>
          <li style={{ marginBottom: '1rem' }}><Link to="/details/1" style={{ color: 'white', textDecoration: 'none' }}>Details</Link></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
