import React from 'react';

function HoverCounter({ increament, count }) {
  return (
    <div className="main">
      <h1 onMouseOver={increament}>Hovered {count} times</h1>
    </div>
  );
}

export default HoverCounter;
