import React from "react";

import './style.scss';

export const Progress = ({value, max}) => {
  return (
    <div className="progress-wrapper">
      <div className="progress" style={{ width: `${(max - value) / max * 100}%` }}></div>
    </div>
  );
};
