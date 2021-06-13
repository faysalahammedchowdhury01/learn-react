import React, { forwardRef } from 'react';

function Input({}, ref) {
  return <input ref={ref} type="text" placeholder="type comment." />;
}

const ForwardedRef = forwardRef(Input);

export default ForwardedRef;
