import { useState } from "react";

import { LIVES_COUNT } from "../settings";

export const useGame = (data) => {
  const [stepsCount, setStepsCount] = useState(0);
  const [finishedCards, setFinishedCards] = useState([]);

  const checkCards = (firstCard, secondCard) => {
    const firstCardName = data.find(({ id }) => id === firstCard).name;
    const secondCardName = data.find(({ id }) => id === secondCard).name;

    // if (firstCard.type === secondCard.type) {
    //   return;
    // }

    if (firstCardName === secondCardName) {
      setFinishedCards((cards) => [...cards, firstCard, secondCard]);
    }

    setStepsCount((prevCount) => ++prevCount);
  };

  const handleReset = () => {
    setFinishedCards([]);
    setStepsCount(0);
  };

  const errorsCount = stepsCount - finishedCards.length / 2;
  const lives = LIVES_COUNT - errorsCount;
  const isWin = finishedCards.length === data.length;
  const isGameOver = isWin || lives === 0;
  return {
    finishedCards,
    handleReset,
    checkCards,
    errorsCount,
    isGameOver,
    isWin,
  };
};
