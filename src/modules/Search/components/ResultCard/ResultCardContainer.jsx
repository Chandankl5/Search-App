import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import navigationTypeEnums from '../../constants/navigationTypes';

import { updateHighlightedCardIndex, selectHighlightedCardIndex, 
  resetHighlightedCardIndex, selectNavigationType, updateNavigationType } from '../../ducks/SearchSlice';

import ResultCard from './ResultCard'

function ResultCardContainer({
  id,
  index,
  name,
  address,
  pincode,
  itemsFoundText
}) {

  const dispatch = useDispatch();

  const highlightedCardIndex = useSelector(selectHighlightedCardIndex);
  const navigationType = useSelector(selectNavigationType);

  function onMouseOver() {
    dispatch(updateNavigationType(navigationTypeEnums.MOUSE));

    dispatch(updateHighlightedCardIndex(index));
  }

  function onMouseLeave() {
    dispatch(resetHighlightedCardIndex());
  }

  return (
   <ResultCard
    id={id}
    index={index}
    name={name}
    address={address}
    pincode={pincode}
    itemsFoundText={itemsFoundText}
    highlightedCardIndex={highlightedCardIndex}
    navigationType={navigationType}
    onMouseOver={onMouseOver}
    onMouseLeave={onMouseLeave}
  />
  )
}

export default ResultCardContainer