import React, { useState } from 'react';
import getCookie from '../lib/authentication';

const SearchBar = ({setSearchResults}) => {

    const [searchTerm,setSearchTerm] = useState(null);
    const fetchPosts = (keyword) => {
        const url=`http://127.0.0.1:8000/search/posts`
        const csrfToken = getCookie('csrftoken');
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrfToken,
            },
            body: JSON.stringify({"keyword": keyword}),
            credentials : 'include',
            })
            .then((response) => {
                if (!response.ok) {
                throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                console.log("fetched search results:", data)
                setSearchResults(data);  
            })
            .catch((error) => {
                console.error('There was a problem with the fetch operation:', error);
                setSearchResults([])
        });
    }
    const handleChange = (keyword) => {
        setSearchTerm(keyword)
        fetchPosts(keyword)
    };

    return (
        <div className='search-bar'>
            <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange = {(e) =>{handleChange(e.target.value)}}
            />
        </div>
    );
};
export default SearchBar;
