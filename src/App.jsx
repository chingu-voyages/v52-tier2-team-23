// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomerRequestFormPage from './pages/CustomerRequestFormPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/customer-request-form" element={<CustomerRequestFormPage />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
};

export default App;