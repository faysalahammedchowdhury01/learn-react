import React, { useReducer } from 'react';

function Lesson17() {
  const initialState = 0;

  const reducer = (state, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return state + 1;
      case 'DECREMENT':
        return state - 1;
      default:
        state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h3 style={state >= 0 ? { color: 'green' } : { color: 'red' }}>
        Count: {state}
      </h3>
      <button
        style={{ marginRight: '10px', color: 'red' }}
        onClick={() => dispatch({ type: 'DECREMENT' })}
      >
        -Decrement
      </button>
      <button
        style={{ color: 'green' }}
        onClick={() => dispatch({ type: 'INCREMENT' })}
      >
        +Increment
      </button>
    </>
  );
}

export default Lesson17;
