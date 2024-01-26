
import '../../css/profile-container.css';
import React, { useEffect, useState,useReducer } from 'react';
import { Tab } from '@mui/material';
import {Box} from '@mui/material';
import TabList from '@mui/lab/TabList';
import TabContext from '@mui/lab/TabContext';
import {TabPanel} from '@mui/lab';
import Avatar from './avatar';
import Sprouts from './sprouts';

const ProfileContainer = (props) => {

    const [linkValue,setLinkValue] = useState('0');
    const createProfileContent = () =>{
        switch(linkValue){
            case '0':
                return <Sprouts author_id={props.author_id} />
            case '2':
                return <Sprouts author_id={props.author_id} saved={true} />
            default:
                return null
        }
    }

    const handleNavLinkClick = (e,newValue)=>{
        setLinkValue(newValue)
    }
    return (
        <div className='profile-container'>
            <div className='profile-background'>
                <div className='profile-picture'>
                    <Avatar/>
                </div>
            </div>
            <TabContext value={linkValue}>
                <Box sx={{borderBottom:1,borderColor: 'divider'}}>
                    <TabList
                        aria-label='Choose from pages'
                        onChange = {(e,newValue) => {handleNavLinkClick(e,newValue)}}
                        textColor = 'secondary'
                        indicatorColor = 'secondary'
                    >   
                        <Tab label="My posts" value='0' />
                        <Tab label="Liked" value='1'/>
                        <Tab label="Saved" value= '2'/>
                        <Tab label="Followers" value = '3'/>
                        <Tab label="Following" value ='4'/>
                    </TabList>    
                </Box>
                <div className='profile-content'>
                    <TabPanel value= '0'>{createProfileContent()}</TabPanel>
                    <TabPanel value= '1'>{createProfileContent()}</TabPanel>
                    <TabPanel value= '2'>{createProfileContent()}</TabPanel>
                </div>
            </TabContext>
        </div>
    );
};

export default ProfileContainer;
