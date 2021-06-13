import React, { useEffect, useRef, useState } from 'react';

function Time() {
  const [time, setTime] = useState(new Date());
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(tick, 1000);
    // cleanup
    () => clearInterval(intervalRef.current);
  }, []);

  const tick = () => setTime(new Date());
  return (
    <div>
      <p>Time: {time.toLocaleTimeString()}</p>
      <button onClick={() => clearInterval(intervalRef.current)}>
        Cleanup
      </button>
    </div>
  );
}

export default Time;
