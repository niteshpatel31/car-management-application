import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import CarListPage from './pages/CarListPage';
import CarDetailPage from './pages/CarDetailPage';
import AddCarPage from './pages/AddCarPage';

const App = () => {
  const isAuthenticated = !!localStorage.getItem('token');

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/cars" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/cars" element={isAuthenticated ? <CarListPage /> : <Navigate to="/login" />} />
        <Route path="/cars/add" element={isAuthenticated ? <AddCarPage /> : <Navigate to="/login" />} />
        <Route path="/cars/:id" element={isAuthenticated ? <CarDetailPage /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
