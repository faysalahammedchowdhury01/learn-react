import React from 'react';
import useWindowWidth from './hooks/useWindowWidth';

function LayoutOne() {
  const onSmallScreen = useWindowWidth(768);

  return (
    <h2>You are browsing on {onSmallScreen ? 'small' : 'large'} device</h2>
  );
}

export default LayoutOne;
