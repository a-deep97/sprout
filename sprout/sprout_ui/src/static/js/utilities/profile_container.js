
import '../../css/profile-container.css';
import React, { useEffect, useState,useReducer } from 'react';
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
    const [container,setContainer] = useState([])
    useEffect(()=>{
        const createProfileContent = () =>{
            const content = selectedLink == ProfileNavlinks.Posts ?
                <Sprouts author_id={props.author_id} />:
                selectedLink == ProfileNavlinks.Saved ?
                <Sprouts author_id={props.author_id} saved={true} />:
                null
            setContainer(content)
         }
        createProfileContent();
    },[selectedLink]);

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
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                <a className="nav-link" aria-current="page" onClick={() => handleNavLinkClick(ProfileNavlinks.Posts)}>Posts</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" aria-current="page" onClick={() => handleNavLinkClick(ProfileNavlinks.LikedPosts)}>Liked Posts</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" aria-current="page" onClick={() => handleNavLinkClick(ProfileNavlinks.Saved)}>Saved</a>
                                </li>   
                                <li className="nav-item">
                                <a className="nav-link" aria-current="page" onClick={() => handleNavLinkClick(ProfileNavlinks.Followers)}>Followers</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" aria-current="page" onClick={() => handleNavLinkClick(ProfileNavlinks.Following)}>Following</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <div className='profile-content'>
                {container}
            </div>
        </div>
    );
};

export default ProfileContainer;
