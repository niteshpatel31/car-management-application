import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../api';
import CarDetail from '../components/CarDetail';

const CarDetailPage = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCar = async () => {
      const { data } = await api.get(`/cars/${id}`);
      setCar(data);
    };
    fetchCar();
  }, [id]);

  const handleDelete = async () => {
    await api.delete(`/cars/${id}`);
    navigate('/cars');
  };

  return car ? <CarDetail car={car} onDelete={handleDelete} /> : <p>Loading...</p>;
};

export default CarDetailPage;
