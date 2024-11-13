import React from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from '../components/AuthForm';
import api from '../api';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = async (credentials) => {
    try {
      const { data } = await api.post('/auth/login', credentials);
      localStorage.setItem('token', data.token);
      navigate('/cars');
    } catch (err) {
      alert('Login failed');
    }
  };

  return <AuthForm onSubmit={handleLogin} buttonText="Login" />;
};

export default LoginPage;
