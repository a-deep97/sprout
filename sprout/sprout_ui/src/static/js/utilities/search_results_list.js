
import '../../css/search-results-list.css';
import React from "react";
import SearchResultItem from './search_result';
function SearchResultsList(props){

    return (
        <div className="search_results">
            {props.search_results.map((result, index) => (
                <div key={index} className="search_result">
                    <SearchResultItem content={result.content} />
                </div>
            ))}
        </div>
    );

}

export default SearchResultsList;