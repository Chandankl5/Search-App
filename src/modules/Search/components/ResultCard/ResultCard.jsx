import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import navigationTypeEnums from '../../constants/navigationTypes';

import './ResultCard.css';

function ResultCard({
  id,
  index,
  name,
  address,
  pincode,
  itemsFoundText,
  highlightedCardIndex,
  navigationType,
  onMouseOver,
  onMouseLeave
}) {
  
  //Ref to Result Card Node to scroll into view when navigated using keyboard
  const cardRef = useRef(null);

  useEffect(() => {

    // Scroll Into view if the card index same as highlighted Card Index (only for keyboard navigation)
    if(index === highlightedCardIndex && navigationType === navigationTypeEnums.KEYBOARD) {
      cardRef.current.scrollIntoView();
    }
  }, [highlightedCardIndex])

  return (
    <div className={`c-result-card ${index === highlightedCardIndex ? 'highlighted': ''}`}
      id={index}
      ref={cardRef}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
    >
      {id && (
        <div 
        className="line-item" 
        dangerouslySetInnerHTML={{__html: id}}
        />
      )}
      {name && (
        <div 
        className="line-item" 
        dangerouslySetInnerHTML={{__html: name}}
        />
      )}
      {itemsFoundText && (
        <div 
        className="line-item" 
        dangerouslySetInnerHTML={{__html: itemsFoundText}}
        />
      )}      
      {address && (
        <div 
        className="line-item" 
        dangerouslySetInnerHTML={{__html: address}}
        />
      )}
      {pincode && (
        <div 
        className="line-item" 
        dangerouslySetInnerHTML={{__html: pincode}}
        />
      )}
    </div>
  )
}

ResultCard.propTypes = {
  id: PropTypes.string,
  index: PropTypes.number,
  name: PropTypes.string,
  addres: PropTypes.string,
  pincode: PropTypes.string,
  itemsFoundText: PropTypes.string,
  highlightedCardIndex: PropTypes.number,
  navigationType: PropTypes.string,
  onMouseOver: PropTypes.func,
  onMouseLeave: PropTypes.func
}

export default ResultCard