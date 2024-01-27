
import '../css/page-body.css';
import '../css/home.css';
import {React, useEffect, useState} from 'react';
import LeftPanel from './utilities/left_panel';
import RightPanel from './utilities/right_panel';
import Sprouts from './utilities/sprouts';
import QuickPost from './forms/quick_post';
import CreateSproutButton from './buttons/create_sprout_button';
import TopNavbar from './utilities/top-navbar';

const HomePage = () => {
  return (
    <div className='page-body'>
        <LeftPanel/>  
        <div className="main-container">
            <TopNavbar/>
            <QuickPost/>
            <div className='home-posts'>
              <Sprouts/>
            </div>
        </div>
        <RightPanel/>
    </div>
  );
};

export default HomePage;
