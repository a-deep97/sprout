
import '../../css/left-panel.css';
import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import {Typography} from '@mui/material';

import Avatar from './avatar';
import LogoutButton from '../buttons/logout_button';
const LeftPanel = () => {

  const navigate = useNavigate()
  const handleHomeLink = () => {
    navigate('/home')
  }
  const handleDashboardLink = () => {
    navigate('/dashboard')
  }
  const handlePostLink = () => {
    navigate('/sprout/create')
  }
  return (
    <aside className="left-panel">
      <div className='logo-section'></div>
      <div className='profile-section'>
        <Avatar/>
        <div className='user-info'>
          <Typography variant = 'subtitle1' align='center'>Amannnnnnnnnnnnnnnn Deep</Typography>
          <hr className='custom-hr'/>
        </div>
      </div>
      <div className="sidebar-links">
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link active" onClick={() =>handleHomeLink()}>
                Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" onClick={() =>handleDashboardLink()}>
              Dashboard
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" onClick={() => handlePostLink()}>
                Create post
            </a>
          </li>
        </ul>
      </div>
      <div className='extra'></div>
      <div className='logout-section'>
        <LogoutButton/>
      </div>
    </aside>
  );
};

export default LeftPanel;
