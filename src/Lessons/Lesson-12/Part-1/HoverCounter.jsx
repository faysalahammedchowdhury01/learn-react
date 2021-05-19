import React from 'react';

function HoverCounter({ increament, count, theme, switchTheme }) {
  const style =
    theme === 'dark' ? { backgroundColor: '#242424', color: '#ffffff' } : null;

  return (
    <div className="main">
      <h1 style={style} onMouseOver={increament}>
        Hovered {count} times
      </h1>
      <button onClick={switchTheme}>Switch Theme</button>
    </div>
  );
}

export default HoverCounter;
