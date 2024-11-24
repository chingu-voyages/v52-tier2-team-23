// src/components/CustomerRequestForm.jsx
import React, { useState } from 'react';
import '../index.css'; // Import the CSS file

const CustomerRequestForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    address1: '',
    address2: '',
    town: '',
    city: '',
    postcode: '',
    datetime: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleDelete = () => {
    setFormData({
      name: '',
      lastName: '',
      email: '',
      address1: '',
      address2: '',
      town: '',
      city: '',
      postcode: '',
      datetime: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2 className="form-title text-center">Customer Request Form</h2>
      <div className="form-group-inline">
        <div className="form-group">
          <label className="form-label">
            First Name:
            <input type="text" name="name" value={formData.name} onChange={handleChange} className="form-input" />
          </label>
        </div>
        <div className="form-group">
          <label className="form-label">
            Surname:
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="form-input" />
          </label>
        </div>
      </div>
      <div className="form-group">
        <label className="form-label">
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-input" />
        </label>
      </div>
      <div className="form-group">
        <label className="form-label">
          Address Line 1:
          <input type="text" name="address1" value={formData.address1} onChange={handleChange} className="form-input" />
        </label>
      </div>
      <div className="form-group">
        <label className="form-label">
          Address Line 2:
          <input type="text" name="address2" value={formData.address2} onChange={handleChange} className="form-input" />
        </label>
      </div>
      <div className="form-group-inline">
        <div className="form-group">
          <label className="form-label">
            Town:
            <input type="text" name="town" value={formData.town} onChange={handleChange} className="form-input" />
          </label>
        </div>
        <div className="form-group">
          <label className="form-label">
            City:
            <input type="text" name="city" value={formData.city} onChange={handleChange} className="form-input" />
          </label>
        </div>
        <div className="form-group">
          <label className="form-label">
            Postcode:
            <input type="text" name="postcode" value={formData.postcode} onChange={handleChange} className="form-input" />
          </label>
        </div>
      </div>
      <div className="form-group">
        <label className="form-label">
          Date and Time:
          <input type="datetime-local" name="datetime" value={formData.datetime} onChange={handleChange} className="form-input" />
        </label>
      </div>
      <div className="form-actions">
        <button type="submit" className="form-button form-button-submit">Submit Form</button>
        <button type="button" onClick={handleDelete} className="form-button form-button-delete">Delete Form</button>
      </div>
    </form>
  );
};

export default CustomerRequestForm;