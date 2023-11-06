import React, { useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import MyContext from '../Context/authContext';
import { useContext } from 'react';
export const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { status, setstatus } = useContext(MyContext);
 const navigate=useNavigate()
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://vast-cyan-tuna.cyclic.app/users/login',formData)
    .then((res)=>{
        setstatus(true)
        alert("Login Sucessfull, Welcome to Educquik")
        navigate('/')
    })
    .catch((err)=>{
        console.log(err)
        alert('Wrong Credentials')
    })
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
        <button id='signupbtn' onClick={()=>{navigate('/signup')}}>Sign Up</button>
      </div>
    </div>
  );
};

