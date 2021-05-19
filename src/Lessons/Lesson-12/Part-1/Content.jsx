import React from 'react';
import ThemeContext from './contexts/ThemeContext';
import HoverCounter from './HoverCounter';
import IncreamentCounter from './IncreamentCounter';

export default function Content() {
  return (
    <div className="main">
      <h2>This is a Content</h2>
      <IncreamentCounter>
        {(count, increament) => (
          <ThemeContext.Consumer>
            {({ theme, switchTheme }) => (
              <HoverCounter
                count={count}
                increament={increament}
                theme={theme}
                switchTheme={switchTheme}
              />
            )}
          </ThemeContext.Consumer>
        )}
      </IncreamentCounter>
    </div>
  );
}
