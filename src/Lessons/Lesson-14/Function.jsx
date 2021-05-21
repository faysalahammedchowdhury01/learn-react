import React, { useEffect, useState } from 'react';

function FunctionalComponent() {
  const [time, setTime] = useState(new Date());
  const [count, setCount] = useState(0);

  const tick = () => {
    setTime(new Date());
  };

  useEffect(() => {
    const timer = setInterval(tick, 1000);

    // Clean Up
    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    document.title = count;
  }, [count]);

  const add = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="main">
      <p>Time : {time.toLocaleTimeString()}</p>
      <button onClick={add}>Add</button>
    </div>
  );
}

export default FunctionalComponent;
