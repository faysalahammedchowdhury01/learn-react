import React, { useState } from 'react';
import FunctionalComponent from './Function';

function Lesson14() {
  const [show, setShow] = useState(true);

  const toggle = () => {
    setShow((prevShow) => !prevShow);
  };

  return (
    <div className="main">
      {show ? <FunctionalComponent /> : ''}
      <br />
      <br />
      <button onClick={toggle}>{show ? 'Hide Post' : 'Show Post'}</button>
    </div>
  );
}

export default Lesson14;
