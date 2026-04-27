import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/common/Button';
import Input from '../components/common/Input';
import { validateForm } from '../utils/validation';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm({ username, password });
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      console.log('Logging in with', username, password);
      navigate('/dashboard');
    }
  };

  const containerStyle = {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    padding: '20px'
  };

  const formContainerStyle = {
    width: '100%',
    maxWidth: '400px',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    padding: '32px'
  };

  const titleStyle = {
    textAlign: 'center',
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: '8px'
  };

  const subtitleStyle = {
    textAlign: 'center',
    color: '#6b7280',
    marginBottom: '32px'
  };

  const checkboxContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '24px'
  };

  const checkboxLabelStyle = {
    display: 'flex',
    alignItems: 'center',
    fontSize: '14px',
    color: '#6b7280'
  };

  const checkboxStyle = {
    marginRight: '8px'
  };

  const linkStyle = {
    color: '#3b82f6',
    textDecoration: 'none',
    fontSize: '14px'
  };

  const demoCredentialsStyle = {
    marginTop: '24px',
    padding: '16px',
    backgroundColor: '#f3f4f6',
    borderRadius: '8px',
    textAlign: 'center'
  };

  const demoTitleStyle = {
    fontSize: '12px',
    color: '#6b7280',
    marginBottom: '8px'
  };

  const demoTextStyle = {
    fontSize: '12px',
    fontFamily: 'monospace',
    color: '#4b5563',
    marginBottom: '4px'
  };

  return (
    <div style={containerStyle}>
      <div style={formContainerStyle}>
        <form onSubmit={handleSubmit}>
          <h1 style={titleStyle}>Login</h1>
          <p style={subtitleStyle}>Sign in to your admin dashboard</p>
          
          <Input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            label="Username"
            error={!!errors.username}
            errorText={errors.username}
          />

          <Input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            label="Password"
            error={!!errors.password}
            errorText={errors.password}
          />

          <div style={checkboxContainerStyle}>
            <label style={checkboxLabelStyle}>
              <input
                type="checkbox"
                style={checkboxStyle}
              />
              Remember me
            </label>
            <button type="button" style={linkStyle} onClick={(e) => e.preventDefault()}>
              Forgot password?
            </button>
          </div>

          <Button
            type="submit"
            className="w-full"
          >
            Sign In
          </Button>
        </form>

        <div style={demoCredentialsStyle}>
          <p style={demoTitleStyle}>Demo Credentials:</p>
          <p style={demoTextStyle}>Username: admin</p>
          <p style={demoTextStyle}>Password: password</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
