import '../../css/avatar.css';
import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
const Avatar = () => {

  const defaultProfilePicture = require('../../media/avatar.png');
  return (
    <img className='avatar' 
          src={defaultProfilePicture}
          alt='Profile Picture'
        />
  );
};

export default Avatar;
