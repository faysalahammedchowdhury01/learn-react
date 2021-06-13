import React, { forwardRef } from 'react';

function Input({}, inputRef) {
  return (
    <div>
      <input ref={inputRef} type="text" placeholder="type..." />
    </div>
  );
}

const ForwardedInput = forwardRef(Input);

export default ForwardedInput;
