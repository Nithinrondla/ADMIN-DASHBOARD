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
      // Simulate login success
      console.log('Logging in with', username, password);
      navigate('/dashboard'); // Redirect to dashboard
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f8f9fa' }}>
      <form onSubmit={handleSubmit} style={{ width: '300px', padding: '2rem', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>Login</h2>
        <Input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ marginBottom: '1rem' }}
        />
        {errors.username && <p style={{ color: 'red', fontSize: '0.8rem' }}>{errors.username}</p>}
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ marginBottom: '1rem' }}
        />
        {errors.password && <p style={{ color: 'red', fontSize: '0.8rem' }}>{errors.password}</p>}
        <Button type="submit" style={{ width: '100%' }}>Login</Button>
      </form>
    </div>
  );
};

export default Login;
