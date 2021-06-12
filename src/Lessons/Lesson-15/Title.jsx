import React from 'react';

function Title() {
  console.log('rendering title...');
  return (
    <div>
      <h2>Learn React.memo(), useCallback, useMemo Hooks</h2>
    </div>
  );
}

export default React.memo(Title);
