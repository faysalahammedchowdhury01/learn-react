import React, { useReducer } from 'react';

const initialState = {
  count: 0,
  count2: 10,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { [action.counter]: state[action.counter] + action.value };
    case 'DECREMENT':
      return { [action.counter]: state[action.counter] - action.value };
    default:
      return state;
  }
};

function Counter2() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [state2, dispatch2] = useReducer(reducer, initialState);

  const { count } = state;
  const { count2 } = state2;

  return (
    <div>
      <div>
        <div>Count = {count}</div>
        <button
          onClick={() =>
            dispatch({ type: 'DECREMENT', value: 1, counter: 'count' })
          }
        >
          Decrement by 1
        </button>
        <button
          onClick={() =>
            dispatch({ type: 'INCREMENT', value: 1, counter: 'count' })
          }
        >
          Increment by 1
        </button>
        <button
          onClick={() =>
            dispatch({ type: 'DECREMENT', value: 5, counter: 'count' })
          }
        >
          Decrement by 5
        </button>
        <button
          onClick={() =>
            dispatch({ type: 'INCREMENT', value: 5, counter: 'count' })
          }
        >
          Increment by 5
        </button>
      </div>
      <hr />
      <div>
        <div>Count = {count2}</div>
        <button
          onClick={() =>
            dispatch2({ type: 'DECREMENT', value: 1, counter: 'count2' })
          }
        >
          Decrement by 1
        </button>
        <button
          onClick={() =>
            dispatch2({ type: 'INCREMENT', value: 1, counter: 'count2' })
          }
        >
          Increment by 1
        </button>
        <button
          onClick={() =>
            dispatch2({ type: 'DECREMENT', value: 5, counter: 'count2' })
          }
        >
          Decrement by 5
        </button>
        <button
          onClick={() =>
            dispatch2({ type: 'INCREMENT', value: 5, counter: 'count2' })
          }
        >
          Increment by 5
        </button>
      </div>
    </div>
  );
}

export default Counter2;
