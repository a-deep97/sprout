
import '../../css/left-panel.css';
import { useNavigate } from 'react-router-dom';
import React, { useEffect , useState } from 'react';
import {Typography,Box,Link} from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import {IconButton} from '@mui/material';

import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';

import Avatar from './avatar';
import LogoutButton from '../buttons/logout_button';

import config from '../../../config.js';
import getCookie from '../lib/authentication';


const LeftPanel = () => {

  const navigate = useNavigate()
  const [authorInfo ,setAuthorInfo] = useState(null);
  const APIdomain = config.APIdomain; 

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
          <Typography variant = 'h4' align='center'>{authorInfo && authorInfo.firstname}</Typography>
          <Typography variant='subtitle' marginTop={2} align='center'>{authorInfo && authorInfo.bio}</Typography>
          <Box marginTop={2} style={{'border-top': 'solid 0.5px rgba(255,255,255,0.5)'}}>
            <PeopleOutlineIcon/>
            <Typography variant='caption'> . </Typography>
            <Typography variant='caption'>Followers</Typography>
            <Typography variant='caption'> . </Typography> 
            <Typography variant='caption'>Following</Typography>
          </Box>
          
          <Box alignItems={'center'} alignContent={'center'} marginTop={2} display={'flex'} flexDirection={'row'}>
            <IconButton color='inherit'>
              <TwitterIcon/>  
            </IconButton>
            <IconButton color='inherit'>
              <LinkedInIcon/>  
            </IconButton>
            <IconButton color='inherit'>
              <FacebookIcon/>  
            </IconButton>
          </Box>
        </div>
      </div>
      <div className='logout-section'>
        <LogoutButton/>
      </div>
    </aside>
  );
};

export default LeftPanel;
