import '../../css/quick-post.css';
import React, { useState } from 'react';
import TextEditor from '../utilities/text_editor';
import { useNavigate } from 'react-router-dom';
import getCookie from '../lib/authentication';

import config from '../../../config.js';

const QuickPost = () => {
  const APIdomain = config.APIdomain;
  const [editorValue, setEditorValue] = useState('');
  const navigate = useNavigate();

  const handleEditorChange = (value) => {
    setEditorValue(value);
  };
  const handleSubmit = () => {
    const formData={
        "content":editorValue,
    }
    if(editorValue==''){
        return
    } 
    const csrfToken = getCookie('csrftoken');
    fetch('${APIdomain}/sprout/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrfToken,
        },
        body: JSON.stringify(formData),
        credentials : 'include',
        })
        .then((response) => {
            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
            console.log('Response from server:', data);
            window.location.reload()
        })
        .catch((error) => {
            console.error('There was a problem with the create operation:', error);
            window.alert("Post could not be created :( \n\n "+ error.message)
    });
  };

  return (
    <div>
      <form onSubmit className='quick_post'>
        <TextEditor className="text-editor" value={editorValue} onChange={handleEditorChange}/>
        <button type="button" className='form-buttons' onClick={(e) => {  handleSubmit(); }}>
          Post
        </button>
      </form>
    </div>
  );
};

export default QuickPost;
