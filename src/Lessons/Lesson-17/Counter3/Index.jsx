import React, { useReducer } from 'react';
import ComponentA from './ComponentA';
import { counterContext } from './contexts/countContext';

const initialState = 0;

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

function Index() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div>Count = {count}</div>
      <counterContext.Provider value={{ countDispatch: dispatch }}>
        <ComponentA />
      </counterContext.Provider>
    </div>
  );
}

export default Index;
