import React, { useEffect, useRef } from 'react';
import Input from './Input';

function Form() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <form>
        <Input ref={inputRef} />
      </form>
    </div>
  );
}

export default Form;
