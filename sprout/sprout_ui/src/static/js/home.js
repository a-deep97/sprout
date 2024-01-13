
import '../css/page-body.css';
import {React, useEffect, useState} from 'react';
import LeftPanel from './utilities/left_panel';
import RightPanel from './utilities/right_panel';
import Sprouts from './utilities/sprouts';
import Logo from './utilities/logo';
import CreateSproutButton from './buttons/create_sprout_button';

const HomePage = () => {
  return (
    <div className='page-body'>
        <LeftPanel/>  
        <div className="main-container">
            <Logo/>
            <div className='create-section'><CreateSproutButton/></div>
            <Sprouts user_posts = {false}/>
        </div>
        <RightPanel/>
    </div>
  );
};

export default HomePage;
