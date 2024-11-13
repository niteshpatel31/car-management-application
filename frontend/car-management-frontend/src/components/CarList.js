import React from 'react';
import { Link } from 'react-router-dom';

const CarList = ({ cars }) => (
  <div>
    {cars.map(car => (
      <div key={car._id}>
        <h3>{car.title}</h3>
        <p>{car.description}</p>
        <Link to={`/cars/${car._id}`}>View Details</Link>
      </div>
    ))}
  </div>
);

export default CarList;
