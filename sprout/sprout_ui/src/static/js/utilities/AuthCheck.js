import React, { useEffect, useState } from 'react';
import { Redirect, Route, useNavigate } from 'react-router-dom';
import getCookie from '../lib/authentication';

import config from '../../../config.js';

const AuthCheck = ({component:Component}) => {
    const APIdomain = config.APIdomain;
    const [isLoggedIn, setLoggedIn] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        const checkAuthenticationStatus = () => {
            const csrfToken = getCookie('csrftoken');
                fetch(`${APIdomain}/authenticate`, {
                    method: 'GET',
                    headers: {
                        'X-CSRFToken': csrfToken,
                    },
                    credentials : 'include',
                    })
                    .then((response) => {
                        if(response.status==401){
                            setLoggedIn(false)
                        }
                        if (!response.ok) {
                            setLoggedIn(false)
                        }
                        return response.json();
                    })
                    .then((data) => {
                        setLoggedIn(true);
                    })
                    .catch((error) => {
                        console.error('There was a problem with the authenticate check', error);
                        setLoggedIn(false);
                });
        };

        checkAuthenticationStatus();
    }, []);

    if(!isLoggedIn){
        navigate('/auth');
        return null;
    }

    return <Route>{Component && <Component/> }</Route>
};

export default AuthCheck;
