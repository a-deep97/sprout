
import React from 'react';
import { useNavigate } from 'react-router-dom';

const CreateSproutButton = () => {

    const navigate = useNavigate()
    const handleCreate = () =>{
        navigate('/sprout/create')
    }
    return (
        <button type="button" class="btn btn-dark" onClick={handleCreate}>Create</button>
     );
};

export default CreateSproutButton;
