
import React from 'react';
import Rate from './Rate';




const SearchMovie = ({ setSearch,ratingSearch, setRatingSearch }) => {
  return (
    <div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Type movie name to search"
          onChange={(e) => setSearch(e.target.value)}
        />
        
      </div>
      <div className="rating-search">
          <Rate rate={ratingSearch} setRatingSearch={setRatingSearch} />
        </div>
    </div>
  );
};

export default SearchMovie;


 
