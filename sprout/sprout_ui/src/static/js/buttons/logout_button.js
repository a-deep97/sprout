
import '../../css/logout-button.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import getCookie from '../lib/authentication';

const LogoutButton = () => {

    const navigate = useNavigate()
    const handleLogout = () =>{
        const csrfToken = getCookie('csrftoken');
        fetch('http://127.0.0.1:8000/logout', {
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
            navigate('/auth');
        })
        .catch((error) => {
            console.error('Logout error:', error.message);
            return null
        });
    }
    return (
        <button type="button" className='logout-btn' onClick={handleLogout}>sign out</button>
     );
};

export default LogoutButton;
