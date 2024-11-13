import React from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from '../components/AuthForm';
import api from '../api';

const RegisterPage = () => {
  const navigate = useNavigate();

  const handleRegister = async (credentials) => {
    try {
      const { data } = await api.post('/auth/register', credentials);
      localStorage.setItem('token', data.token);
      navigate('/cars');
    } catch (err) {
      alert('Registration failed');
    }
  };

  return <AuthForm onSubmit={handleRegister} buttonText="Register" />;
};

export default RegisterPage;
