import React from 'react';

import './style.scss';

export const Hearts = ({ count = 0, value = 0 }) => {
  return (
    <p className="hit-points-indicator">
      {Array(count)
        .fill(null)
        .map((_, i) => (
          <span key={i} className={`hit-points-item ${i < value ? 'hit-points-used' : 'hit-points-unused'}`} />
        ))}
    </p>
  );
};
