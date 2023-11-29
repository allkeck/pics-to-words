import React from "react";

import './style.scss';

export const Card = ({ id, url, description, isVisible, isFinished, handleCardClick }) => {
  const className = `${isVisible ? 'card-show' : ''} ${isFinished ? 'card-finished' : ''}`;

  return (
    <li className={`card ${className}`} onClick={() => handleCardClick(id)}>
      <img width="204" height="144" src={url} alt={description} />
    </li>
  );
}
