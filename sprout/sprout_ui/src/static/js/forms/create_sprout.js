import '../../css/create-sprout.css';
import React, { useState } from 'react';
import TextEditor from '../utilities/text_editor';

const CreateSproutForm = () => {
  const [editorValue, setEditorValue] = useState('');
  const [isDraft, setIsDraft] = useState(false);

  const handleEditorChange = (value) => {
    setEditorValue(value);
  };

  const handleSaveDraft = () => {
    setIsDraft(true);
    saveContent(); // Replace with your actual logic for saving draft
  };

  const handlePost = () => {
    setIsDraft(false);
    saveContent(); // Replace with your actual logic for posting
  };

  const saveContent = () => {
    // Logic for saving or posting the content
    console.log('Content:', editorValue, 'Draft:', isDraft);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveContent();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextEditor value={editorValue} onChange={handleEditorChange} />

        <div>
          <button type="button" onClick={handleSaveDraft}>
            Save Draft
          </button>
          <button type="button" onClick={handlePost}>
            Post
          </button>
        </div>

        {/* Additional components or features related to your blogging site */}
      </form>
    </div>
  );
};

export default CreateSproutForm;
