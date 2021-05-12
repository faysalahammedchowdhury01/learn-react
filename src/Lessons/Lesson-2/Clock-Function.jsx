import React from 'react';

export default function ClockFunction({ children, name, locale }) {
  return (
    <div className="main">
      <h2>
        {children} - Hello {name} - {new Date().toLocaleTimeString(locale)}
      </h2>
    </div>
  );
}
