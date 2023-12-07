import React from 'react';

import { GameHeader } from '../GameHeader/GameHeader';
import { Grid } from '../Grid/Grid';
import { Modal } from '../Modal/Modal';

import { useGame } from '../../hooks/useGame.js';

import './style.scss';

export const App = ({ data = [] }) => {
  const { finishedCards, handleReset, checkCards, isGameOver, isWin, errorsCount } = useGame(data);

  const modalClassName = isWin ? '' : 'modal-box-lose';
  const modalCaption = isWin ? 'Победа' : 'Поражение';
  const modalDescription = `Вы нашли ${finishedCards.length / 2} слова`;

  return (
    <section className="game container">
      <GameHeader value={finishedCards.length} max={data.length} errorsCount={errorsCount} />
      <Grid images={data} checkCards={checkCards} finishedCards={finishedCards} />
      {isGameOver && (
        <Modal className={modalClassName}>
          <h3 className="modal-caption">{modalCaption}</h3>
          <p className="modal-description">{modalDescription}</p>
          <button onClick={handleReset} className="button" type="button">
            Новая игра
          </button>
        </Modal>
      )}
    </section>
  );
};
