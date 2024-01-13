import '../../css/login.css';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

const LoginForm = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()
  const handleSignupClick = () => {
      props.onToggleForm()
      navigate('/auth')
  };
  const handleLogin = (e) => {
    e.preventDefault();
    const formData={
      "email":email,
      "password":password,
    }
    const csrfToken = getCookie('csrftoken');
    fetch('http://127.0.0.1:8000/login', {
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
            props.setLoggedIn(true)
            navigate('/')
        })
        .catch((error) => {
            console.error('There was a problem with the signup operation:', error);
            window.alert("User could not be registered :( \n\n "+ error.message)
    });
  }
  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Login</h2>
              {/* Login Form */}
              <form onSubmit={handleLogin}>
                <div className="mb-3">
                  <input type="text" className="form-control" id="email" name="email" placeholder='email' onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="mb-3">
                  <input type="password" className="form-control" id="password" name="password" placeholder='password' onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="rememberMe" />
                  <label className="form-check-label" htmlFor="rememberMe">
                    Remember me
                  </label>
                </div>
                <button type="submit" className="btn btn-primary btn-block mb-3">
                  Login
                </button>
              </form>
              {/* Signup Link */}
              <div className="text-center">
                <p>
                  Not a member? <a href="#!" onClick={handleSignupClick}>Sign up</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
