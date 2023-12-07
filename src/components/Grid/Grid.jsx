import React, { useState } from 'react';

import { Card } from '../Card/Card.jsx';

import { TIMEOUT } from '../../settings.js';

import './style.scss';

export const Grid = ({ images = [], visibleItems = [], finishedCards = [], checkCards }) => {
  const [selectedCards, setSelectedCards] = useState(visibleItems);

  const handleCardClick = (id) => {
    if (selectedCards.includes(id) || finishedCards.includes(id)) return;

    switch (selectedCards.length) {
      case 0:
        setSelectedCards([id]);
        break;

      case 1:
        setSelectedCards((cards) => [...cards, id]);
        checkCards(selectedCards[0], id);
        setTimeout(() => {
          setSelectedCards([]);
        }, TIMEOUT)
        break;

      default:
        setSelectedCards([]);
        break;
    }
  };

  const cards = images.map((item) => (
    <Card
      key={item.id}
      item={item}
      isVisible={selectedCards.includes(item.id)}
      isFinished={finishedCards.includes(item.id)}
      isChecking={selectedCards.length === 2}
      handleCardClick={handleCardClick}
    />
  ));

  return <ul className="cards">{cards}</ul>;
};
