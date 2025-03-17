import React, { useState } from "react";
import axios from "axios";
import "./SignupForm.css";

const SignupForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  const API_URL = import.meta.env.REACT_APP_API_URL; 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_URL}/api/signup`, formData, {
        withCredentials: true, 
      });
      alert(response.data.message);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form">
        <input type="text" name="name" placeholder="Name" onChange={handleChange} required className="name"/>
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required className="email"/>
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required className="password"/>
        <button type="submit">Signup</button>
      </div>
    </form>
  );
};

export default SignupForm;
