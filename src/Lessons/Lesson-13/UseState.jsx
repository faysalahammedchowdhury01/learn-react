import React, { useState } from 'react';

function UseState() {
  const [text, setText] = useState('React');
  const [warning, setWarning] = useState(null);

  const handleChange = (e) => {
    const value = e.target.value;
    const updatedWarning = value.includes('.js')
      ? 'You need Javascript skill'
      : null;

    setText(value);
    setWarning(updatedWarning);
  };

  return (
    <div className="main">
      <hr />
      <h2>Using 'useState Hook'</h2>
      <div className="display">{text ? text : 'empty!'}</div>
      <input onChange={handleChange} type="text" value={text} />
      <div className="warning">{warning || 'Good Choice!'}</div>
      <hr />
    </div>
  );
}

export default UseState;
