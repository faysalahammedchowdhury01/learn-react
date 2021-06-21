import React from 'react';
import useWindowWidth from './hooks/useWindowWidth';

function LayoutTwo() {
  const onSmallScreen = useWindowWidth(700);

  return (
    <h2 className={onSmallScreen ? 'small' : 'large'}>
      This is another Component
    </h2>
  );
}

export default LayoutTwo;
