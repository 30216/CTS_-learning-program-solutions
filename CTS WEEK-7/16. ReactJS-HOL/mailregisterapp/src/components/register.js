import React, { useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    const tempErrors = {};

    if (formData.name.length < 5) {
      tempErrors.name = 'Name must be at least 5 characters.';
    }

    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      tempErrors.email = 'Invalid email address.';
    }

    if (formData.password.length < 8) {
      tempErrors.password = 'Password must be at least 8 characters.';
    }

    setErrors(tempErrors);

    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (validate()) {
      alert('Form submitted successfully!');
      console.log('Submitted Data:', formData);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Register Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label><br />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <br />
          {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
        </div>

        <div>
          <label>Email:</label><br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <br />
          {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
        </div>

        <div>
          <label>Password:</label><br />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <br />
          {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
