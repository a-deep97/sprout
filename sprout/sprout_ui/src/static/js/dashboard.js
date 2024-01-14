
import '../css/page-body.css';
import React, { useEffect, useState } from 'react';
import LeftPanel from './utilities/left_panel';
import RightPanel from './utilities/right_panel';
import Logo from './utilities/logo';
import Sprouts from './utilities/sprouts';

const Dashboard = () => {

  return (
    <div className='page-body'>
        <LeftPanel/>  
        <div className="main-container">
            <Logo/>
            <Sprouts user_posts = {true}/>
        </div>
        <RightPanel/>
    </div>
  );
};

export default Dashboard;
