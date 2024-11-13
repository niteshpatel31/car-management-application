import React, { useEffect, useState } from 'react';
import api from '../api';
import CarList from '../components/CarList';

const CarListPage = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      const { data } = await api.get('/cars');
      setCars(data);
    };
    fetchCars();
  }, []);

  return <CarList cars={cars} />;
};

export default CarListPage;
