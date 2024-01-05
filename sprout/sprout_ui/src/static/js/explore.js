
import '../css/page-body.css';
import React from 'react';
import LeftPanel from './utilities/left_panel';
import RightPanel from './utilities/right_panel'
import PostCard from './utilities/post_card';
import Logo from './utilities/logo';

const Explore = () => {
  return (
    <div className='page-body'>
        <LeftPanel/>  
        <div className="main-container">
            <Logo/>
            <main class="col-md-9 ml-sm-auto col-lg-10 px-md-4 main-content">
                welcome to exploration
            </main>
        </div>
        <RightPanel/>
    </div>
  );
};

export default Explore;
