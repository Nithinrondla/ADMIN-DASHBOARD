import React, { useEffect, useState } from 'react';
import Layout from '../components/layout/Layout';
import Card from '../components/common/Card';
import Input from '../components/common/Input';
import Button from '../components/common/Button';
import api from '../services/api';

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await api.get('/users');
        setUsers(response.data);
        setFilteredUsers(response.data);
      } catch (err) {
        setError('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    const filtered = users.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredUsers(filtered);
  }, [search, users]);

  if (loading) {
    return (
      <Layout>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '400px' }}>
          <div style={{ fontSize: '16px' }}>Loading...</div>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <Card>
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#dc2626', marginBottom: '8px' }}>Error Loading Data</h3>
            <p style={{ color: '#dc2626', marginBottom: '16px' }}>{error}</p>
            <Button onClick={() => window.location.reload()}>
              Try Again
            </Button>
          </div>
        </Card>
      </Layout>
    );
  }

  const headerStyle = {
    marginBottom: '32px'
  };

  const titleStyle = {
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: '8px'
  };

  const subtitleStyle = {
    color: '#6b7280',
    marginBottom: '24px'
  };

  const searchContainerStyle = {
    display: 'flex',
    gap: '16px',
    alignItems: 'center',
    marginBottom: '32px'
  };

  const inputContainerStyle = {
    flex: 1,
    maxWidth: '400px'
  };

  const usersContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '24px',
    marginBottom: '32px'
  };

  const userCardStyle = {
    backgroundColor: '#f9fafb',
    padding: '16px',
    borderRadius: '8px',
    border: '1px solid #e5e7eb'
  };

  const userNameStyle = {
    fontSize: '18px',
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: '8px'
  };

  const userInfoStyle = {
    fontSize: '14px',
    color: '#6b7280',
    marginBottom: '4px'
  };

  return (
    <Layout>
      <div style={headerStyle}>
        <h1 style={titleStyle}>Dashboard</h1>
        <p style={subtitleStyle}>Welcome back! Here's what's happening with your platform today.</p>
        
        <div style={searchContainerStyle}>
          <div style={inputContainerStyle}>
            <Input
              type="text"
              placeholder="Search users by name..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <Button variant="outline">
            Export
          </Button>
        </div>
      </div>

      <div>
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '16px' }}>
          Users ({filteredUsers.length} of {users.length})
        </h2>
        
        {filteredUsers.length === 0 ? (
          <Card>
            <div style={{ textAlign: 'center', padding: '48px' }}>
              <p style={{ fontSize: '18px', fontWeight: '500', color: '#1f2937', marginBottom: '8px' }}>No users found</p>
              <p style={{ color: '#6b7280' }}>Try adjusting your search terms</p>
            </div>
          </Card>
        ) : (
          <div style={usersContainerStyle}>
            {filteredUsers.map(user => (
              <Card key={user.id}>
                <div style={userCardStyle}>
                  <h3 style={userNameStyle}>{user.name}</h3>
                  <p style={userInfoStyle}><strong>Email:</strong> {user.email}</p>
                  <p style={userInfoStyle}><strong>Phone:</strong> {user.phone}</p>
                  <p style={userInfoStyle}><strong>Website:</strong> {user.website}</p>
                  <div style={{ marginTop: '16px' }}>
                    <Button size="sm">
                      View Details
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>

      <Card title="Analytics">
        <div style={{ textAlign: 'center', padding: '48px', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
          <p style={{ color: '#6b7280' }}>Chart integration coming soon</p>
        </div>
      </Card>
    </Layout>
  );
};

export default Dashboard;
