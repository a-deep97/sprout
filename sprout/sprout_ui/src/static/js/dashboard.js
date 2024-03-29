
import '../css/page-body.css';
import React, { useEffect, useState } from 'react';
import LeftPanel from './utilities/left_panel';
import RightPanel from './utilities/right_panel';
import ProfileContainer from './utilities/profile_container';
import TopNavbar from './utilities/top-navbar';

const Dashboard = () => {

  return (
    <div className='page-body'>
        <LeftPanel/>  
        <div className="main-container">
          <TopNavbar/>
          <ProfileContainer author_id= {'self'}/>
        </div>
        <RightPanel/>
    </div>
  );
};

export default Dashboard;
