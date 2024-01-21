import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import config from '../../../config.js';

const SignupForm = (props) => {
    const APIdomain = config.APIdomain;
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleSignup = (e) => {
      validateForm()
      e.preventDefault();

      const formData={
          "firstname":firstname,
          "lastname":lastname,
          "email":email,
          "password":password,
      }
      const csrfToken = getCookie('csrftoken');
      console.log(formData)
      fetch('${APIdomain}/signup', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'X-CSRFToken': csrfToken,
          },
          body: JSON.stringify(formData),
          credentials : 'include',
          })
          .then((response) => {
              if (!response.ok) {
              throw new Error('Network response was not ok');
              }
              return response.json();
          })
          .then((data) => {
              console.log('Response from server:', data);
              props.onToggleForm()
              navigate('/auth/')
          })
          .catch((error) => {
              console.error('There was a problem with the signup operation:', error);
              window.alert("User could not be registered :( \n\n "+ error.message)
      });
  };
  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }
  const validateForm = () => {
    if (password !== confirmPassword) {
        alert("Passwords did not match.");
        return false;
    }
    return true;
  }
  const handleLoginClick= ()=>{
    props.onToggleForm()
    navigate('/auth')
  }
  return (
    <div className='signup-container'>
      <div className="container mt-5 signup-container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title text-center mb-4">Sign Up</h2>
                <form onSubmit={handleSignup}>
                  <div className="mb-3">
                    <input type="text" className="form-control" id="firstName" name="firstName" placeholder='First Name' onChange={(e) => setFirstName(e.target.value)} required />
                  </div>
                  <div className="mb-3">
                    <input type="text" className="form-control" id="lastName" name="lastName" placeholder='Last Name' onChange={(e) => setLastName(e.target.value)} required />
                  </div>
                  <div className="mb-3">
                    <input type="email" className="form-control" id="email" name="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} required />
                  </div>
                  <div className="mb-3">
                    <input type="password" className="form-control" id="password" name="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} required />
                  </div>
                  <div className="mb-3">
                    <input type="password" className="form-control" id="confirmPassword" name="confirmPassword" placeholder='Confirm Password' onChange={(e) => setConfirmPassword(e.target.value)} required />
                  </div>
                  <button type="submit" className="btn btn-primary btn-block mb-3">
                    Sign Up
                  </button>
                </form>
                {/* Login Link */}
                <div className="text-center">
                  <p>
                    Already have an account? <a href="#!" onClick={handleLoginClick}>Login</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
