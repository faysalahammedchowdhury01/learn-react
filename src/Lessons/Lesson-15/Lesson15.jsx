import React, { useCallback, useMemo, useState } from 'react';
import Button from './Button';
import ShowCount from './ShowCount';
import Title from './Title';

function Lesson15() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const increamentByOne = useCallback(() => {
    setCount1((prevCount) => prevCount + 1);
  }, []);

  const increamentByFive = useCallback(() => {
    setCount2((prevCount) => prevCount + 5);
  }, []);

  const isEvenOrOdd = useMemo(() => {
    let i = 0;
    while (i < 1000000000) i += 1;
    return count1 % 2 === 0;
  }, [count1]);

  return (
    <div>
      <Title />
      <ShowCount title="Counter 1" count={count1} />
      <Button handleCount={increamentByOne}>Increament by 1</Button>
      <div>{isEvenOrOdd ? 'Even' : 'Odd'}</div>
      <hr style={{ margin: '20px 0' }} />
      <ShowCount title="Counter 2" count={count2} />
      <Button handleCount={increamentByFive}>Increament by 5</Button>
    </div>
  );
}

export default Lesson15;
