import React from 'react';
import ClickCounter from './ClickCounter';
import HoverCounter from './HoverCounter';
import IncreamentCounter from './IncreamentCounter';

export default function Lesson11() {
  return (
    <div className="main">
      <IncreamentCounter>
        {(count, increament) => (
          <ClickCounter count={count} increament={increament} />
        )}
      </IncreamentCounter>

      <IncreamentCounter>
        {(count, increament) => (
          <HoverCounter count={count} increament={increament} />
        )}
      </IncreamentCounter>
    </div>
  );
}
