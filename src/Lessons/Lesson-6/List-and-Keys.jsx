import React from 'react';
import Clock from '../Lesson-3/State-and-Lifecycle-in-Class-Component';

function Lesson6({ quantities }) {
  return (
    <div className="main">
      <div>
        {quantities.map(() => (
          <Clock key={Math.random()} />
        ))}
      </div>
    </div>
  );
}

export default Lesson6;
