import React, { useState } from 'react';

import { Grid } from '../Grid/Grid.jsx';

import './style.scss';

export const App = ({ data = [] }) => {
  const [stepsCount, setStepsCount] = useState(0);

  const handleIncStepsCounter = () => {
    setStepsCount((prevCount) => ++prevCount);
  };

  return (
    <section className="game container">
      <div className="steps">Шаг {stepsCount}</div>
      <Grid images={data} handleIncStepsCounter={handleIncStepsCounter} />
    </section>
  );
};
