import React from 'react';
import { useSelector } from 'react-redux';

import { selectSearchResult } from '../../ducks/SearchSlice';

import SearchResults from './SearchResults'

function SearchResultsContainer() {

  const searchResult = useSelector(selectSearchResult);

  return (
   <SearchResults
    searchResult={searchResult}
  />
  )
}

export default SearchResultsContainer