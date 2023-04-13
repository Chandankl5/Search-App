import React from 'react';
import PropTypes from 'prop-types';

import './SearchInput.css';

function SearchInput({
  value,
  placeholder,
  onChange,
  onKeyDown
}) {
  return (
   <input 
    type="search" 
    className="c-search-input" 
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    onKeyDown={onKeyDown}
  />
  )
}

SearchInput.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func
}

export default SearchInput;