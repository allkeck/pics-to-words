import React, { useState } from 'react';

import { GamePage } from '../GamePage/GamePage';
import { ResultsPage } from '../ResultsPage/ResultsPage';
import { AppRoute } from '../../settings';

export const App = ({ data = [], results = [] }) => {
  const [page, setPage] = useState(AppRoute.Game);
  const [result, setResult] = useState(0);

  const showResults = (wordsCount) => {
    setResult(wordsCount);
    setPage(AppRoute.Results);
  };

  const handleReset = () => {
    setPage(AppRoute.Game);
  };

  const getPage = (route) => {
    switch (route) {
      case AppRoute.Game:
        return <GamePage cards={data} onShowResults={showResults} />;

      case AppRoute.Results:
        return <ResultsPage results={results} current={result} onHandleReset={handleReset} />;

      default:
        return null;
    }
  };

  return getPage(page);
};
