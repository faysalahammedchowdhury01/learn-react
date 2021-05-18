import React from 'react';
import withCounter from './withCounter';

const ClickCounter = ({ increament, count }) => {
  return (
    <div className="main">
      <button onClick={increament}>Clicked {count} times</button>
    </div>
  );
};

export default withCounter(ClickCounter);
