// Login.js
import React from 'react';
import '../../css/login.css';
import { useNavigate } from 'react-router-dom';

const LoginForm = (props) => {
  const navigate =useNavigate()
  const handleSignupClick = () => {
      props.onToggleForm()
      navigate('/auth')
  };
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Login</h2>
              {/* Login Form */}
              <form>
                <div className="mb-3">
                  <input type="text" className="form-control" id="username" name="username" placeholder='username' required />
                </div>
                <div className="mb-3">
                  <input type="password" className="form-control" id="password" name="password" placeholder='password' required />
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
