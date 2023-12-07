import React from 'react';

import { GameHeader } from '../GameHeader/GameHeader';
import { Grid } from '../Grid/Grid';
import { Modal } from '../Modal/Modal';

import { useGame } from '../../hooks/useGame.js';

import './style.scss';

export const GamePage = ({ cards = [], onShowResults }) => {
  const { finishedCards, handleReset, checkCards, isGameOver, isWin, errorsCount } = useGame(cards);

  const modalClassName = isWin ? '' : 'modal-box-lose';
  const modalCaption = isWin ? 'Победа' : 'Поражение';
  const modalDescription = `Вы нашли ${finishedCards.length / 2} слова`;

  const handleResultsClick = () => {
    onShowResults(finishedCards.length / 2);
  };

  return (
    <section className="game container">
      <GameHeader value={finishedCards.length} max={cards.length} errorsCount={errorsCount} />
      <Grid images={cards} checkCards={checkCards} finishedCards={finishedCards} />
      {isGameOver && (
        <Modal className={modalClassName}>
          <h3 className="modal-caption">{modalCaption}</h3>
          <p className="modal-description">{modalDescription}</p>
          <button onClick={handleResultsClick} className="button" type="button">
            Результаты
          </button>
        </Modal>
      )}
    </section>
  );
};
