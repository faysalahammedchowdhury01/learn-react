import React from 'react';
import withCounter from './withCounter';

const HoverCounter = ({ count, increament }) => {
  return <h1 onMouseEnter={increament}>Hovered {count} times</h1>;
};

export default withCounter(HoverCounter);
