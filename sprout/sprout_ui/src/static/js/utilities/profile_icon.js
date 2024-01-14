import '../../css/profile-icon.css';
import React from 'react';

const ProfileIcon = () => {

  const defaultProfilePicture = require('../../media/avatar-icon.png');

  return (
    <div className='avatar-icon-section'>
      <img
        src={defaultProfilePicture}
        alt='Profile Picture'
        className='avatar-icon'
      />
    </div>
  );
};

export default ProfileIcon;
