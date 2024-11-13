import React from 'react';
import { useNavigate } from 'react-router-dom';
import CarForm from '../components/CarForm';
import api from '../api';

const AddCarPage = () => {
  const navigate = useNavigate();

  const handleAddCar = async (formData) => {
    await api.post('/cars', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    navigate('/cars');
  };

  return <CarForm onSubmit={handleAddCar} />;
};

export default AddCarPage;
