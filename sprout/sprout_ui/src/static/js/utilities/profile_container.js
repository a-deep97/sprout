
import '../../css/profile-container.css';
import React, { useEffect, useState } from 'react';
import Avatar from './avatar';
import Sprouts from './sprouts';

const ProfileContainer = (props) => {

    const ProfileNavlinks = {
        Posts:0,
        LikedPosts:1,
        Saved:2,
        Followers:3,
        Following:4,
    }
    const [selectedLink,setSelectedLink] = useState(ProfileNavlinks.Posts);
    const handleNavLinkClick = (link)=>{
        setSelectedLink(link)
    }
    return (
        <div className='profile-container'>
            <div className='profile-background'>
                <div className='profile-picture'>
                    <Avatar/>
                </div>
            </div>
            <div className='profile-navbar'>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container-fluid">
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                <a class="nav-link" aria-current="page" onClick={() => handleNavLinkClick(ProfileNavlinks.Posts)}>Posts</a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link" aria-current="page" onClick={() => handleNavLinkClick(ProfileNavlinks.LikedPosts)}>Liked Posts</a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link" aria-current="page" onClick={() => handleNavLinkClick(ProfileNavlinks.Saved)}>Saved</a>
                                </li>   
                                <li class="nav-item">
                                <a class="nav-link" aria-current="page" onClick={() => handleNavLinkClick(ProfileNavlinks.Followers)}>Followers</a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link" aria-current="page" onClick={() => handleNavLinkClick(ProfileNavlinks.Following)}>Following</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <div className='profile-content'>
                {
                    selectedLink===ProfileNavlinks.Posts ?
                        <Sprouts author_id={props.author_id}/>:
                        null
                }
            </div>
        </div>
    );
};

export default ProfileContainer;
