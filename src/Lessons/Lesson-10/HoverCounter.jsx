import React from 'react';
import withCounter from './withCounter';

function HoverCounter({ count, increament }) {
  return (
    <div className="main">
      <h1 onMouseEnter={increament}>Hovered {count} times</h1>
    </div>
  );
}

export default withCounter(HoverCounter);
