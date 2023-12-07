import React from 'react';

import './style.scss';

export const Card = ({ item, isVisible, isFinished, isChecking, handleCardClick }) => {
  const { id, url, description, type } = item;
  const content = type === 'image' ? <img width="204" height="144" src={url} alt={description} /> : <span></span>;
  const showError = isChecking && isVisible && !isFinished;
  const cardClassName = `card ${isVisible ? 'card-show' : ''} ${isFinished ? 'card-finished' : ''} ${showError ? 'card-error' : ''}`;

  const handleClick = () => {
    if (isFinished) return;

    handleCardClick(id);
  };

  return (
    <li className={cardClassName} onClick={handleClick}>
      {content}
    </li>
  );
};
