import React from 'react';
import PropTypes from 'prop-types';

import { ResultCard } from '../ResultCard';

import './SearchResults.css';

function SearchResults({
  searchResult = {}
}) {

  if(searchResult.noMatch) {
    return <p>No Results Found!</p>
  }

  if(!searchResult?.items.length) {
    return null;
  }

  return (
    <div 
    className="c-search-results"
    >
      {searchResult?.items.map((item, index) => <ResultCard key={item.id} index={index} {...item} />)}
    </div>
  )
}

SearchResults.propTypes = {
  searchResult: PropTypes.object
}

export default SearchResults;