
import '../../css/logout-button.css';
import React from 'react';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import getCookie from '../lib/authentication';
import ConfirmDialog from '../dialogue_box/confirm_box';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

import config from '../../../config.js';

const LogoutButton = () => {
    const APIdomain = config.APIdomain;
    const [dialogueOpen,setDialogOpen] = useState();
    const navigate = useNavigate()
    const handleButtonClick = (e) => {
        e.stopPropagation();
        setDialogOpen(true);
    }
    const handleLogout = () =>{
        const csrfToken = getCookie('csrftoken');
        fetch(`${APIdomain}/logout`, {
            method: 'POST', 
            headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrfToken,
            },
            body: JSON.stringify({}),
            credentials: 'include',
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error('Logout failed');
            }
            return response.json();
        })
        .then((data) => {
            console.log('Logout successful:', data);
            setDialogOpen(false)
            navigate('/auth');
        })
        .catch((error) => {
            console.error('Logout error:', error.message);
            return null
        });
    }
    return (
        <div>
            <button type="button" className='logout-btn' onClick={ (e) => {handleButtonClick(e)}}>sign out &nbsp;&nbsp;<FontAwesomeIcon icon={faSignOutAlt} /></button>
            <ConfirmDialog
                open={dialogueOpen}
                onClose={(newValue) => setDialogOpen(newValue)}
                onConfirm = { () => handleLogout()}
                title = {'Wanna leave ?'} 
                message ={'Are u sure you wanna leave ?'} />
        </div>
     );
};

export default LogoutButton;
