import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignupForm = (props) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleSignup = () => {
    // Perform signup logic, e.g., call authentication function
    props.onAuthenticate({ firstName, lastName, email, password, username });
  };

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
                {/* Signup Form */}
                <form>
                  <div className="mb-3">
                    <input type="text" className="form-control" id="firstName" name="firstName" placeholder='First Name' required />
                  </div>
                  <div className="mb-3">
                    <input type="text" className="form-control" id="lastName" name="lastName" placeholder='Last Name' required />
                  </div>
                  <div className="mb-3">
                    <input type="email" className="form-control" id="email" name="email" placeholder='Email' required />
                  </div>
                  <div className="mb-3">
                    <input type="password" className="form-control" id="password" name="password" placeholder='Password' required />
                  </div>
                  <div className="mb-3">
                    <input type="password" className="form-control" id="confirmPassword" name="confirmPassword" placeholder='Confirm Password' required />
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
