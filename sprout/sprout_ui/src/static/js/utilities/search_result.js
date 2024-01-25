import '../../css/search-result.css';
import React from 'react';

const SearchResultItem = (props) => {
  
    return (
      <div className="search-result-body">
        <p className="card-text"><div dangerouslySetInnerHTML={{ __html: props.content }}/></p>
      </div>
  );
};

export default SearchResultItem;
