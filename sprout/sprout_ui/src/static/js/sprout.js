
import '../css/page-body.css';
import React, { useState, useEffect } from 'react';
import LeftPanel from './utilities/left_panel';
import RightPanel  from './utilities/right_panel';
import SproutView from './utilities/sprout_view';
import Logo from './utilities/logo';
import { useNavigate, useParams } from 'react-router-dom';
import getCookie from './lib/authentication';

const Sprout = () => {
  const [sproutData, setSproutData] = useState(null);
  const navigate = useNavigate();
  const { sprout_id } = useParams();
  
  useEffect(() => {
    getSproutData();
  }, [sprout_id,setSproutData]);

  const getSproutData = () =>{
    const csrfToken = getCookie('csrftoken');
    fetch(`http://127.0.0.1:8000/sprout?sprout_id=${sprout_id}`, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': csrfToken,
    },
    credentials : 'include'
    })
    .then((response) => {
        if (!response.ok) {
        throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then((data) => {
        console.log('Response from server:', data);
        if(data === null){
          navigate('/home') 
        }
        setSproutData(data)
    })
    .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
        window.alert("Target could not be updated :( \n\n "+ error.message)
    });
  }
  
  if(sproutData==null){
    return
  }
  console.log("sproutdata",sproutData)
  return (
    <div className='page-body'>
        <LeftPanel/>  
        <div className="main-container">
            <Logo/>
              {<SproutView sproutData={sproutData} />}
        </div>
        <RightPanel/>
    </div>
  );
};

export default Sprout;
