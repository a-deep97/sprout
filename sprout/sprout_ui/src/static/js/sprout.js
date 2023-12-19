
import '../css/page-body.css';
import React from 'react';
import LeftPanel from './utilities/left_panel';
import RightPanel  from './utilities/right_panel';

const Sprout = () => {
  return (
    <div className='page-body'>
        <LeftPanel/>  
        <div className="main-container">
            <main class="col-md-9 ml-sm-auto col-lg-10 px-md-4 main-content">
                <h2>Main Display Container</h2>
                <p>Welcome to our blogging site!</p>
            </main>
        </div>
        <RightPanel/>
    </div>
  );
};

export default Sprout;
