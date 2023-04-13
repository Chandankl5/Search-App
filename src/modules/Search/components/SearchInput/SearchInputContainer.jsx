import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import navigationTypeEnums from '../../constants/navigationTypes';

import { selectSearchQuery, incrementHighlightedCardIndex, decrementHighlightedCardIndex,
  updateSearchQuery, updateSearchResult, updateNavigationType } from '../../ducks/SearchSlice';

import { selectUsers } from '../../ducks/UsersSlice';
import { selectMatchingResults } from '../../utils/search';

import SearchInput from './SearchInput'

function SearchInputContainer() {

  const dispatch = useDispatch();

  const searchQuery = useSelector(selectSearchQuery);
  const users = useSelector(selectUsers);

  function onChange(e) {
    dispatch(updateSearchQuery(e.target.value));

    const { items, noMatch } = selectMatchingResults(e.target.value, users);

    dispatch(updateSearchResult({items, noMatch}));
  }

  function onKeyDown(e) {
    dispatch(updateNavigationType(navigationTypeEnums.KEYBOARD));
  
    if(e.key === 'ArrowUp') {
      dispatch(decrementHighlightedCardIndex())
    }

    if(e.key === 'ArrowDown') {
      dispatch(incrementHighlightedCardIndex())
    }
  }

  return (
    <SearchInput
      value={searchQuery}
      placeholder='Search users by ID, address, name..'
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  )
}

export default SearchInputContainer