import React from 'react';
import "./MyButton.css"

const MyButton = ({children, className}) => {
  return (
    <button className={className}>
      {children}
    </button>
  );
};

export default MyButton;