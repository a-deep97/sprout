
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/auth.css';
import React, { useState } from 'react';
import LoginForm from './forms/login';
import SignupForm from './forms/signup';

const AuthPage = (props) => {
  const [isSignUp, setIsSignUp] = useState(false);

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
    </div>
  );
};

export default AuthPage;
