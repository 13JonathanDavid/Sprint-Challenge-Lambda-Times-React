import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Card from './Card';

const Cards = props => {
  return (
    <div className="cards-container">
      
        { props.cards.map((e) => <Card card={e}/> )}
    </div>
  );
};

// Make sure you include prop types for all of your incoming props

export default Cards;
Cards.propTypes = {
  cards : PropTypes.array
};