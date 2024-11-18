// src/CustomerRequestForm.jsx
import React from 'react';
import './CustomerRequestForm.css';

const CustomerRequestForm = () => {
  return (
    <div className="form-container">
      <h1>Customer Request Form</h1>
      <form>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input type="text" id="firstName" name="firstName" required />
        </div>
        <div className="form-group">
          <label htmlFor="surname">Surname:</label>
          <input type="text" id="surname" name="surname" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="address1">Address 1:</label>
          <input type="text" id="address1" name="address1" required />
        </div>
        <div className="form-group">
          <label htmlFor="address2">Address 2:</label>
          <input type="text" id="address2" name="address2" />
        </div>
        <div className="form-group">
          <label htmlFor="town">Town:</label>
          <input type="text" id="town" name="town" required />
        </div>
        <div className="form-group">
          <label htmlFor="city">City:</label>
          <input type="text" id="city" name="city" required />
        </div>
        <div className="form-group">
          <label htmlFor="postCode">Post Code:</label>
          <input type="text" id="postCode" name="postCode" required />
        </div>
        <div className="form-group">
          <label htmlFor="dateTime">Date and Time:</label>
          <input type="datetime-local" id="dateTime" name="dateTime" required />
        </div>
        <div className="form-group">
          <button type="button" className="delete">Delete</button>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default CustomerRequestForm;