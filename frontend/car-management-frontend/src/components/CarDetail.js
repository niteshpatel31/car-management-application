import React from 'react';

const CarDetail = ({ car, onDelete }) => (
  <div>
    <h2>{car.title}</h2>
    <p>{car.description}</p>
    <div>
      {car.images.map((url, index) => (
        <img key={index} src={url} alt="Car" width="200" />
      ))}
    </div>
    <button onClick={() => onDelete(car._id)}>Delete</button>
  </div>
);

export default CarDetail;
