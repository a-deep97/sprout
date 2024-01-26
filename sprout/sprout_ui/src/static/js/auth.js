
import '../css/auth.css';
import React, { useState } from 'react';
import LoginForm from './forms/login';
import SignupForm from './forms/signup';

import AuthBackgroundParticleConfig from './config/particle_config';

const AuthPage = (props) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const authPicture = require('../media/auth-img.jpg');
  const handleAuthenticate = (userData) => {
    // Authentication logic (can be replaced with actual authentication call)
    console.log('Authentication data:', userData);
  };

  const handleToggleForm = (props) => {
    setIsSignUp(!isSignUp);
  };
  return (
    <div className='auth-page'>
      <div className="auth-page-container">
        {isSignUp ? (
          <SignupForm onToggleForm={handleToggleForm} />
          ) : (
          <LoginForm onToggleForm={handleToggleForm} setLoggedIn = {props.setLoggedIn} />
        )}
      </div>
      <div className='form-image'>
        <img
            src= {authPicture}
            width='100%'
            height='100%'
        />
      </div>
    </div>
  );
};

export default AuthPage;
