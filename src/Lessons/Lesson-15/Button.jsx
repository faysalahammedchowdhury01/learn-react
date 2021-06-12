import React from 'react';

function Button({ handleCount, children }) {
  console.log('rendering ' + children + ' button...');
  return <button onClick={handleCount}>{children}</button>;
}

export default React.memo(Button);
