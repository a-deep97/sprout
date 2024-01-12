
import '../css/page-body.css';
import React from 'react';
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
            <main class="col-md-9 ml-sm-auto col-lg-10 px-md-4 main-content">
              <Sprouts user_posts = {false}/>
            </main>
        </div>
        <RightPanel/>
    </div>
  );
};

export default HomePage;
