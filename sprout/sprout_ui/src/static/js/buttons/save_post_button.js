import '../../css/save-post-button.css';
import React, { useState } from 'react';
import getCookie from '../lib/authentication';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import { faBookmark as faBookmarkSolid } from '@fortawesome/free-solid-svg-icons';
import {Snackbar,Alert} from '@mui/material';

import config from '../../../config.js';

const SavePostButton = (props) => {
  const APIdomain = config.APIdomain;
  const [isSaved, setIsSaved] = useState(props.isSaved);
  const [savedSnack ,setSavedSnack] = useState(false);

  const handleSave = (e) => {
    e.stopPropagation();
    const url = `${APIdomain}/post/save`;
    const csrfToken = getCookie('csrftoken');
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': csrfToken,
      },
      body: JSON.stringify({ 
        postId: props.postId
    }),
      credentials: 'include',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log(`Post ${isSaved ? 'unsaved' : 'saved'} successfully:`, props.postId);
        setIsSaved(!isSaved);
        setSavedSnack(true);
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
      });
  };
  return (
    <div className={`save-button ${isSaved ? 'saved' : ''}`} onClick={(e) => handleSave(e)}>
      <FontAwesomeIcon icon={isSaved ? faBookmarkSolid : faBookmark} className="save-icon" />
      <Snackbar open = {savedSnack} autoHideDuration={5000} onClose={() => {setSavedSnack(false)}} >
        <Alert
          onClose={() => {setSavedSnack(false)}}
          severty = "success"
          sx= {{width: '100%'}}
        >
          {
            isSaved == false ? 'You unsaved this post':
            'You saved the post'  
          }
        </Alert>
      </Snackbar>
    </div>
  );
};

export default SavePostButton;
