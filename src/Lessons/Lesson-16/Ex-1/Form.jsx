import React, { useEffect, useRef } from 'react';

function Form() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <form>
        <input ref={inputRef} type="text" placeholder="type..." />
      </form>
    </div>
  );
}

export default Form;
