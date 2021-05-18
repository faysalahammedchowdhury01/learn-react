import React from 'react';

export default function BoilingVerdict({ celsius = 0 }) {
  return (
    <div className="main">
      <p>The water would {celsius >= 100 ? '' : 'not'} boil</p>
    </div>
  );
}
