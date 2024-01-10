
import '../../css/create-sprout.css';
import React from 'react';
import LeftPanel from './left_panel';
import RightPanel  from './right_panel';
import CreateSproutForm from '../forms/create_sprout';
const Sprout = () => {
  return (
    <div className='page-body'>
        <LeftPanel/>  
        <div className="main-container">
          <main class="col-md-9 ml-sm-auto col-lg-10 px-md-4 main-content">
              <CreateSproutForm/>
          </main>
        </div>
        <RightPanel/>
    </div>
  );
};

export default Sprout;
