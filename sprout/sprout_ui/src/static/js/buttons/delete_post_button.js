import '../../css/delete-post-button.css';
import React from 'react';
import getCookie from '../lib/authentication';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const PostDeleteButton = (props) => {
    const handleDelete = (e) => {
        e.stopPropagation()
        const url=`http://127.0.0.1:8000/delete/post` 
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
  };

  return (
    <div className="delete-button" onClick={ (e) => {handleDelete(e)}}>
      <FontAwesomeIcon icon={faTrash} className='trash-icon' />
    </div>
  );
};

export default PostDeleteButton;
