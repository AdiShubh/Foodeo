// src/pages/SignIn.jsx
'use client';

import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import useAuthStore from '../store/authStore';
import { toast } from 'react-toastify';

const SignIn = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({ email: '', password: '' });
  const { login } = useAuthStore();
  const navigate = useNavigate();
  const [pending, setPending] = useState(false);

  const validateForm = () => {
    const newErrors = { email: '', password: '' };

    // Basic validation checks
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);

    // Return true if there are no errors
    return !Object.values(newErrors).some((error) => error);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
  
    setFormData((prev) => ({ ...prev, [name]: value }));
  
    // Clear or update the error for the current field
    setErrors((prevErrors) => {
      const newErrors = { ...prevErrors };
  
      if (name === 'name' && value.trim() !== '') {
        newErrors.name = '';
      }
  
      if (name === 'email') {
        if (!value) {
          newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          newErrors.email = 'Please enter a valid email';
        } else {
          newErrors.email = '';
        }
      }
  
      if (name === 'password') {
        if (!value) {
          newErrors.password = 'Password is required';
        } else if (value.length < 6) {
          newErrors.password = 'Password must be at least 6 characters';
        } else {
          newErrors.password = '';
        }
      }
  
      return newErrors;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform validation
    if (!validateForm()) {
      return;
    }

    try {
      setPending(true);
      const res = await axios.post('http://localhost:5000/api/auth/signin', formData);
      const { user, token } = res.data;
      login(user, token);
      toast.success('Sign-in successful');
      navigate('/HomePage');
    } catch (error) {
      console.error(error?.response?.data?.message || 'Login error');
      alert(error?.response?.data?.message || 'Login failed');
    } finally {
      setPending(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 mt-10 bg-white shadow rounded-xl">
      <h2 className="text-2xl font-bold mb-4 text-center">Sign In</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
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
          {pending ? 'Logging in...' : 'Sign In'}
        </button>
        <div>
          <p>Don't have an account? <Link to="/sign-up">Sign Up</Link></p>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
