// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomerRequestForm from './CustomerRequestForm';

const App = () => {
  return (
      <Routes>
        <Route path="/customer-request-form" element={<CustomerRequestForm />} />
      </Routes>
  );
};

export default App;