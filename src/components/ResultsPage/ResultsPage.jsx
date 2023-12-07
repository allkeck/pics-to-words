import React from 'react';

import './style.scss';

export const ResultsPage = ({ results, current, onHandleReset }) => {
  const sortedResults = [...results, { name: 'Ваш результат', steps: current }].sort((a, b) => b.steps - a.steps);
  const resultsRow = sortedResults.map(({ name, steps }, index) => (
    <tr key={index} className={`result-table-row ${steps === current ? 'active' : ''}`}>
      <td>{index + 1}</td>
      <td>{name}</td>
      <td>{steps}</td>
    </tr>
  ));

  return (
    <section className="result">
      <img src="img/pics-to-words.svg" width="340" height="48" alt="Pics to words" />
      <h2>Лучшие результаты</h2>
      <table className="result-table">
        <thead>
          <tr className="result-table-row">
            <th>Место</th>
            <th>Имя</th>
            <th>Очки</th>
          </tr>
        </thead>
        <tbody>{resultsRow}</tbody>
      </table>
      <button onClick={onHandleReset} className="button" type="button">
        Новая игра
      </button>
    </section>
  );
};
