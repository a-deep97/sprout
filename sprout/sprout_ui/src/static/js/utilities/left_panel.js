
import '../../css/left-panel.css';
import { useNavigate } from 'react-router-dom';
import React, { useEffect , useState } from 'react';
import {Typography} from '@mui/material';

import Avatar from './avatar';
import LogoutButton from '../buttons/logout_button';

import config from '../../../config.js';
import getCookie from '../lib/authentication';


const LeftPanel = () => {

  const navigate = useNavigate()
  const [authorInfo ,setAuthorInfo] = useState(null);
  const APIdomain = config.APIdomain; 
  const handleHomeLink = () => {
    navigate('/home')
  }
  const handleDashboardLink = () => {
    navigate('/dashboard')
  }
  const handlePostLink = () => {
    navigate('/sprout/create')
  }
  useEffect(() =>{
    const fetchAuthorInfo = () =>{
      const csrfToken = getCookie('csrftoken');
      fetch(`${APIdomain}/profile/info`, {
          method: 'GET', 
          headers: {
          'X-CSRFToken': csrfToken,
          },
          credentials: 'include',
      })
      .then((response) => {
          if (!response.ok) {
              throw new Error('Failed to get author info');
          }
          return response.json();
      })
      .then((data) => {
          console.log('Fetch successful:', data);
          setAuthorInfo(data);
      })
      .catch((error) => {
          console.error('fetch error:', error.message);
      });
    }
    fetchAuthorInfo();
  },[]);
  return (
    <aside className="left-panel">
      <div className='logo-section'></div>
      <div className='profile-section'>
        <Avatar/>
        <div className='user-info'>
          <Typography variant = 'h6' align='center'>{authorInfo && authorInfo.firstname}</Typography>
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
