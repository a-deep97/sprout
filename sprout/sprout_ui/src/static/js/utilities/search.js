import '../../css/search.css';
import React, { useState } from 'react';
import SearchBar from '../forms/search-bar';
import SproutCard from './sprout_card';

const Search = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [posts,setPosts] = useState([]);
  const handleSearch =  (results) => {
    setSearchResults(results)
    createSproutCards(results)
  }
  const createSproutCards = (postList) => {

      setPosts([])
      const cards = postList.map((post) => (
      <SproutCard
        sprout_id={post.sprout_id}
        author_name={post.author_name}
        title={post.title}
        content={post.content}
        create_date={post.create_date}
        create_time={post.create_time}
        likes={post.likes}
        dislikes={post.dislikes}
      />
    ));
    setPosts(cards)
    
  };
  return (
    <div className='search'>
      <SearchBar setSearchResults= {handleSearch}/>
      <div className='search-result'>
        {posts}
      </div>
    </div>
  );
};

export default Search;
