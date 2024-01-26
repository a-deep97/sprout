import '../../css/delete-post-button.css';
import React from 'react';
import { useState } from 'react';
import getCookie from '../lib/authentication';
import ConfirmDialog from '../dialogue_box/confirm_box';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import config from '../../../config.js';


const PostDeleteButton = (props) => {

  const [dialogOpen, setDialogOpen] = useState(false);
  const APIdomain = config.APIdomain;
  const handleDelete = () => {
      
      debugger
      
      const url=`${APIdomain}/post/delete` 
      const csrfToken = getCookie('csrftoken');
      fetch(url, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'X-CSRFToken': csrfToken,
          },
          body: JSON.stringify({"post_id": props.postId}),
          credentials : 'include',
          })
          .then((response) => {
              if (!response.ok) {
              throw new Error('Network response was not ok');
              }
              return response.json();
          })
          .then((data) => {
              console.log("deleted following post entity",props.postId)
              props.handleDelete(props.postId)
          })
          .catch((error) => {
              console.error('There was a problem with the fetch operation:', error);
      });
      setDialogOpen(false);
  };
  const handleDeleteButtonClick =(e) =>{
      e.stopPropagation()
      setDialogOpen(true);
  }
  return (
    <div>
      <div className="delete-button"  onClick={(e) => handleDeleteButtonClick(e)}>
      <FontAwesomeIcon icon={faTrash} className='trash-icon' />
    </div>
    <ConfirmDialog 
        open={dialogOpen}
        onClose={(isOpen) => setDialogOpen(isOpen)}
        onConfirm = { () => handleDelete()}
        title = {'Are u sure ?'} 
        message ={'Are u really sure to delete this post ?'} />
    </div>
  );
};

export default PostDeleteButton;
