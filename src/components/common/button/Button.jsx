import React from 'react';

import './button.scss';

function Button({ text, type, onClick, ...props }) {
  return (
    <button className='reusable-button' type={type} onClick={onClick} {...props}>
      <span>{text}</span>
    </button>
  );
}

export default Button;
