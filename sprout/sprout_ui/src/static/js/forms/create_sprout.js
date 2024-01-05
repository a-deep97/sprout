import '../../css/create-sprout.css';
import React, { useState } from 'react';
import TextEditor from '../utilities/text_editor';
import { useNavigate } from 'react-router-dom';
import getCookie from '../lib/authentication';

const CreateSproutForm = () => {
  const [title,setTitle] = useState('');
  const [editorValue, setEditorValue] = useState('');
  const [isDraft, setIsDraft] = useState(false);
  const navigate = useNavigate();

  const handleEditorChange = (value) => {
    setEditorValue(value);
  };

  const saveContent = () => {
    console.log('title:',title,'Content:', editorValue, 'Draft:', isDraft);
  };

  const handleSaveDraft = () => {
    setIsDraft(true);
    saveContent();
  };

  const handlePost = () => {
    setIsDraft(false);
    saveContent();
  };

  const handleSubmit = () => {
    const formData={
        "title":title,
        "content":editorValue,
        "draft": isDraft
    }
    const csrfToken = getCookie('csrftoken');
    console.log(formData)
    fetch('http://127.0.0.1:8000/sprout/create', {
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
            navigate('/')
        })
        .catch((error) => {
            console.error('There was a problem with the create operation:', error);
            window.alert("Sprout could not be created :( \n\n "+ error.message)
    });
  };

  return (
    <div>
      <form onSubmit>
        <input type="text" className="form-control" id="title" name="title" placeholder='Your sprout title...' value={title} onChange={ (e) => {setTitle(e.target.value)}} required />
        <TextEditor value={editorValue} onChange={handleEditorChange} />
        <button type="button" onClick={(e) => { handleSaveDraft(); handleSubmit(); }}>
            Save Draft
        </button>
        <button type="button" onClick={(e) => { handlePost(); handleSubmit(); }}>
          Post
        </button>
      </form>
    </div>
  );
};

export default CreateSproutForm;
