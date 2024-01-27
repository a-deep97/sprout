
import '../css/create-sprout.css';
import React from 'react';
import LeftPanel from './utilities/left_panel';
import RightPanel  from './utilities/right_panel';
import CreateSproutForm from './forms/create_sprout';
import TopNavbar from './utilities/top-navbar';

const Sprout = () => {
  return (
    <div className='page-body'>
        <LeftPanel/>  
        <div className="main-container">
          <TopNavbar/>
          <CreateSproutForm/>
        </div>
        <RightPanel/>
    </div>
  );
};

export default Sprout;
