// src/pages/SignUp.jsx
'use client';

import { useState } from 'react';
import axios from 'axios';
import {Link,  useNavigate } from 'react-router-dom';
import useAuthStore from '../store/authStore';
import { toast } from 'react-toastify';

const SignUp = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState({ name: '', email: '', password: '' });
  const [pending, setPending] = useState(false);
  const { login } = useAuthStore();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error for this field if valid
    setErrors((prevErrors) => {
      const newErrors = { ...prevErrors };

      if (name === 'name' && value.trim()) newErrors.name = '';
      if (name === 'email') {
        if (!value.trim()) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(value)) newErrors.email = 'Invalid email address';
        else newErrors.email = '';
      }
      if (name === 'password') {
        if (!value.trim()) newErrors.password = 'Password is required';
        else if (value.length < 6) newErrors.password = 'Password must be at least 6 characters';
        else newErrors.password = '';
      }

      return newErrors;
    });
  };

  const validateForm = () => {
    const newErrors = { name: '', email: '', password: '' };

    // Name validation
    if (!formData.name) {
      newErrors.name = 'Name is required';
    }

    // Email validation
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);

    // Return true if no errors
    return !Object.values(newErrors).some((error) => error);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form before submission
    if (!validateForm()) {
      return;
    }

    try {
      setPending(true);
      const res = await axios.post('http://localhost:5000/api/auth/signup', formData);
      const { user, token } = res.data;
      login(user, token);
      toast.success('Signup successful');
      navigate('/HomePage');
    } catch (error) {
      console.error(error?.response?.data?.message || 'Signup error');
      alert(error?.response?.data?.message || 'Signup failed');
    } finally {
      setPending(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 mt-10 bg-white shadow rounded-xl">
      <h2 className="text-2xl font-bold mb-4 text-center">Create an Account</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            value={formData.name}
            className={`w-full border px-4 py-2 rounded focus:outline-none focus:ring focus:ring-red-400 ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>

        <div>
          <input
            type="email"
            name="email"
            placeholder="Email address"
            onChange={handleChange}
            value={formData.email}
            className={`w-full border px-4 py-2 rounded focus:outline-none focus:ring focus:ring-red-400 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            value={formData.password}
            className={`w-full border px-4 py-2 rounded focus:outline-none focus:ring focus:ring-red-400 ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
        </div>

        <button
          type="submit"
          className={`w-full bg-red-500 text-white font-semibold py-2 rounded hover:bg-red-600 transition ${pending ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={pending}
        >
          {pending ? 'Signing up...' : 'Sign Up'}
        </button>
        <div>
                  <p>Already have an account? <Link to="/sign-in">Sign In</Link></p>
                </div>
      </form>
    </div>
  );
};

export default SignUp;
