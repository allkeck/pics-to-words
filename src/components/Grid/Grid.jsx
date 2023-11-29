import React, { useState } from 'react';

import { Card } from "../Card/Card.jsx";

import './style.scss';

export const Grid = ({ images = [], visibleItems = [], finishedItems = [], handleIncStepsCounter }) => {
  const [openedCardList, setOpenedCard] = useState(visibleItems);

  const handleCardClick = (id) => {
    if (openedCardList.includes(id)) return;

    handleIncStepsCounter();
    setOpenedCard((currentOpenedList) => [...currentOpenedList, id]);
  };

  return (
    <ul className="cards">
      {images.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          url={item.url}
          description={item.description}
          isVisible={openedCardList.includes(item.id)}
          isFinished={finishedItems.includes(item.id)}
          handleCardClick={handleCardClick}
        />
      ))}
    </ul>
  );
};
