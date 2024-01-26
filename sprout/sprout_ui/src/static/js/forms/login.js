import '../../css/login.css';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

import config from '../../../config.js';
import { Typography,  
      FormControlLabel, 
      Checkbox ,
      Button, 
      Box,
      TextField
    } from '@mui/material';

const LoginForm = (props) => {
  const APIdomain = config.APIdomain;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe,setRememberMe] = useState(false);
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
    fetch('${APIdomain}/login', {
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
    <div className="card">
      <div className="card-body">
        <Typography variant='h3' align='center' >sign in</Typography>
        <form onSubmit={handleLogin} className='login-form'>
          <TextField placeholder='email ...' margin='normal'  size='small'  align='center' onChange={(e) => setEmail(e.target.value)} required></TextField>
          <TextField placeholder='password...' margin='small'  type='password' size='small' onChange={(e) => setPassword(e.target.value)} required></TextField>
          <FormControlLabel style={{'marginTop':'10px'}} control={<Checkbox checked={rememberMe} size='small' onChange={ () => {setRememberMe(!rememberMe)}} />} label="Remember Me"/>
          <Button variant='contained' style={{'marginTop':'10px'}} type='submit' color='primary'>Sign in</Button>
        </form>
        <Box display='flex' alignItems='center' padding='10px'>
          <Typography marginRight='10px' variant='body'>Not a member yet ?</Typography>
          <Link onClick={handleSignupClick}>Sign up</Link>
        </Box>
      </div>
    </div>
  );
};

export default LoginForm;
