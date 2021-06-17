import React, { useContext } from 'react';
import { counterContext } from './contexts/countContext';

function ComponentB() {
  const countContext = useContext(counterContext);
  const { countDispatch } = countContext;
  return (
    <div>
      <button onClick={() => countDispatch({ type: 'DECREMENT' })}>
        Decrement
      </button>
      <button onClick={() => countDispatch({ type: 'INCREMENT' })}>
        Increment
      </button>
    </div>
  );
}

export default ComponentB;
