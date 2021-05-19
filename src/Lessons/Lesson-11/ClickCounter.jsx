import React from 'react';

function ClickCounter({ increament, count }) {
  return (
    <div className="main">
      <button onClick={increament}>Clicked {count} times</button>
    </div>
  );
}

export default ClickCounter;
