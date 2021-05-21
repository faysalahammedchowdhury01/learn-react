import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const addOne = () => {
    setCount((prevState) => prevState + 1);
  };

  const addFive = () => {
    let i = 0;
    while (i < 5) {
      setCount((prevState) => prevState + 1);
      i++;
    }
  };

  return (
    <div className="main">
      <hr />
      <h2>Counter Using 'useState Hook'</h2>
      <div>{count}</div>
      <button onClick={addOne}>Add 1</button>
      <br />
      <button onClick={addFive}>Add 5</button>
      <hr />
    </div>
  );
}

export default Counter;
