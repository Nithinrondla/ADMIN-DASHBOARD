import React from 'react';
import { useParams } from 'react-router-dom';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

const Details = () => {
  const { id } = useParams();

  const userDetails = {
    1: {
      name: 'John Anderson',
      email: 'john.anderson@company.com',
      phone: '+1 (555) 123-4567',
      location: 'San Francisco, CA',
      role: 'Senior Developer',
      department: 'Engineering',
      joinDate: '2021-03-15',
      status: 'Active',
      projects: 24,
      completedTasks: 142,
      teamSize: 8,
      performance: 92,
      skills: ['React', 'Node.js', 'TypeScript', 'AWS', 'Docker']
    },
    2: {
      name: 'Sarah Williams',
      email: 'sarah.williams@company.com',
      phone: '+1 (555) 987-6543',
      location: 'New York, NY',
      role: 'Product Manager',
      department: 'Product',
      joinDate: '2020-07-22',
      status: 'Active',
      projects: 18,
      completedTasks: 98,
      teamSize: 12,
      performance: 88,
      skills: ['Product Strategy', 'Agile', 'Analytics', 'UI/UX', 'Leadership']
    }
  };

  const user = userDetails[id] || {
    name: 'Unknown User',
    email: 'unknown@company.com',
    phone: 'N/A',
    location: 'N/A',
    role: 'N/A',
    department: 'N/A',
    joinDate: 'N/A',
    status: 'Inactive',
    projects: 0,
    completedTasks: 0,
    teamSize: 0,
    performance: 0,
    skills: []
  };

  const containerStyle = {
    padding: '24px'
  };

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '32px'
  };

  const titleStyle = {
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: '8px'
  };

  const subtitleStyle = {
    color: '#6b7280'
  };

  const profileContainerStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 2fr',
    gap: '24px'
  };

  const profileCardStyle = {
    textAlign: 'center',
    padding: '32px'
  };

  const avatarStyle = {
    width: '96px',
    height: '96px',
    backgroundColor: '#3b82f6',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '36px',
    margin: '0 auto 16px'
  };

  const userNameStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: '8px'
  };

  const userRoleStyle = {
    color: '#6b7280',
    marginBottom: '16px'
  };

  const statusBadgeStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '4px 12px',
    borderRadius: '9999px',
    fontSize: '12px',
    fontWeight: '500',
    backgroundColor: user.status === 'Active' ? '#10b98120' : '#6b728020',
    color: user.status === 'Active' ? '#10b981' : '#6b7280'
  };

  const infoContainerStyle = {
    marginTop: '24px',
    textAlign: 'left'
  };

  const infoItemStyle = {
    display: 'flex',
    alignItems: 'center',
    fontSize: '14px',
    color: '#6b7280',
    marginBottom: '12px'
  };

  const statsContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '16px',
    marginBottom: '24px'
  };

  const statCardStyle = {
    textAlign: 'center',
    padding: '16px',
    backgroundColor: '#f9fafb',
    borderRadius: '8px',
    border: '1px solid #e5e7eb'
  };

  const statNumberStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: '4px'
  };

  const statLabelStyle = {
    fontSize: '12px',
    color: '#6b7280'
  };

  const skillsContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    marginBottom: '16px'
  };

  const skillBadgeStyle = {
    padding: '4px 12px',
    backgroundColor: '#dbeafe',
    color: '#1e40af',
    borderRadius: '9999px',
    fontSize: '12px',
    fontWeight: '500'
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <div>
          <h1 style={titleStyle}>User Details</h1>
          <p style={subtitleStyle}>Detailed information for {user.name}</p>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <Button variant="outline">
            Edit Profile
          </Button>
          <Button variant="outline">
            Settings
          </Button>
          <Button>
            Export
          </Button>
        </div>
      </div>

      <div style={profileContainerStyle}>
        <div>
          <Card>
            <div style={profileCardStyle}>
              <div style={avatarStyle}>
                {user.name.charAt(0).toUpperCase()}
              </div>
              <h2 style={userNameStyle}>{user.name}</h2>
              <p style={userRoleStyle}>{user.role}</p>
              <span style={statusBadgeStyle}>
                {user.status}
              </span>
              
              <div style={infoContainerStyle}>
                <div style={infoItemStyle}>
                  <strong>Email:</strong> {user.email}
                </div>
                <div style={infoItemStyle}>
                  <strong>Phone:</strong> {user.phone}
                </div>
                <div style={infoItemStyle}>
                  <strong>Location:</strong> {user.location}
                </div>
                <div style={infoItemStyle}>
                  <strong>Joined:</strong> {new Date(user.joinDate).toLocaleDateString()}
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div>
          <div style={statsContainerStyle}>
            <Card>
              <div style={statCardStyle}>
                <div style={statNumberStyle}>{user.projects}</div>
                <div style={statLabelStyle}>Projects</div>
              </div>
            </Card>
            
            <Card>
              <div style={statCardStyle}>
                <div style={statNumberStyle}>{user.completedTasks}</div>
                <div style={statLabelStyle}>Completed</div>
              </div>
            </Card>
            
            <Card>
              <div style={statCardStyle}>
                <div style={statNumberStyle}>{user.teamSize}</div>
                <div style={statLabelStyle}>Team Size</div>
              </div>
            </Card>
            
            <Card>
              <div style={statCardStyle}>
                <div style={statNumberStyle}>{user.performance}%</div>
                <div style={statLabelStyle}>Performance</div>
              </div>
            </Card>
          </div>

          <Card>
            <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1f2937', marginBottom: '16px' }}>
              Department Information
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div>
                <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '4px' }}>Department</p>
                <p style={{ fontWeight: '500', color: '#1f2937' }}>{user.department}</p>
              </div>
              <div>
                <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '4px' }}>Role</p>
                <p style={{ fontWeight: '500', color: '#1f2937' }}>{user.role}</p>
              </div>
            </div>
          </Card>

          <Card>
            <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1f2937', marginBottom: '16px' }}>
              Skills & Expertise
            </h3>
            <div style={skillsContainerStyle}>
              {user.skills.map((skill, index) => (
                <span key={index} style={skillBadgeStyle}>
                  {skill}
                </span>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Details;
