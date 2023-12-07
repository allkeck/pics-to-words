import React from "react";

import './style.scss';

export const Modal = ({children, className}) => {
  return (
    <div className="modal">
      <div className={`modal-box ${className}`}>
        {children}
      </div>
    </div>
  );
};
