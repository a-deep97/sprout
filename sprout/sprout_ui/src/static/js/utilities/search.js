import '../../css/search.css';
import React, { useState } from 'react';
import SearchResultsList from './search_results_list';
import getCookie from '../lib/authentication';
import config from '../../../config';

const Search = () => {

  const APIdomain = config.APIdomain;
  const [searchTerm,setSearchTerm] = useState(null);
  const [searchResults ,setSearchResults] = useState([]);
  const fetchPosts = (keyword) => {
      const url=`${APIdomain}/search/posts`
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
        <div className='search'>
          <div className='search-bar'>
            <input
              className="form-control" 
              id="exampleInput"
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange = {(e) =>{handleChange(e.target.value)}}
            />
        </div>
        {
          searchResults.length > 0 ?
          <SearchResultsList search_results={searchResults} />:
          null
        }
      </div>
    );
};

export default Search;
