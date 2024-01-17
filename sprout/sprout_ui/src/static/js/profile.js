
import '../css/page-body.css';
import React, { useEffect, useState } from 'react';
import LeftPanel from './utilities/left_panel';
import RightPanel from './utilities/right_panel';
import ProfileContainer from './utilities/profile_container';

const Profile = () => {

  return (
    <div className='page-body'>
        <LeftPanel/>  
        <div className="main-container">
            <ProfileContainer/>
        </div>
        <RightPanel/>
    </div>
  );
};

export default Profile;
