
import '../css/page-body.css';
import React from 'react';
import LeftPanel from './utilities/left_panel';
import RightPanel  from './utilities/right_panel';
import SproutView from './utilities/sprout_view';

const Sprout = () => {
  return (
    <div className='page-body'>
        <LeftPanel/>  
        <div className="main-container">
            <main class="col-md-9 ml-sm-auto col-lg-10 px-md-4 main-content">
                <SproutView/>
            </main>
        </div>
        <RightPanel/>
    </div>
  );
};

export default Sprout;
