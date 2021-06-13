import React, { useRef } from 'react';
import Input from './Input';
import Label from './Label';

function Index() {
  const inputRef = useRef(null);

  const handleFocus = () => inputRef.current.focus();

  return (
    <div>
      <form>
        <Label onClick={handleFocus} />
        <Input ref={inputRef} />
      </form>
    </div>
  );
}

export default Index;
