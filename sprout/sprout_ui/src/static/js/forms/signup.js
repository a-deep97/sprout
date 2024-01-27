
import '../../css/signup.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography,  
  Button, 
  Box,
  TextField,
  Link,
} from '@mui/material';
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
      fetch(`${APIdomain}/signup`, {
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
    <div className="auth-card-body">
      <Typography variant='h3' align='center' >sign Up</Typography>
      <form onSubmit={handleSignup} className='signup-form'>
        <TextField placeholder='first name ...' margin='dense'  size='small'  align='center' onChange={(e) => setFirstName(e.target.value)} required></TextField>
        <TextField placeholder='last name ...' margin='dense'  size='small'  align='center' onChange={(e) => setLastName(e.target.value)} required></TextField>
        <TextField placeholder='email ...' margin='dense'  size='small'  align='center' onChange={(e) => setEmail(e.target.value)} required></TextField>
        <TextField placeholder='password...' margin='dense'  type='password' size='small' align='center' onChange={(e) => setPassword(e.target.value)} required></TextField>
        <TextField placeholder='confirm password...' margin='dense'  type='password' size='small' align='center' onChange={(e) => setConfirmPassword(e.target.value)} required></TextField>
        <Button variant='contained' style={{'marginTop':'10px'}} type='submit' color='primary' size='small'>Sign up</Button>
      </form>
      <Box display='flex' alignItems='center' padding='10px'>
        <Typography marginRight='10px' variant='body'>Already a member ?</Typography>
        <Link onClick={handleLoginClick}>Sign in</Link>
      </Box>
    </div>
  );
};

export default SignupForm;
