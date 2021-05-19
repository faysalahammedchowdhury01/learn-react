// Option-1(Functional Component-1) Using Consumer
/* import React from 'react';
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
} */

// Option-2(Functional Component-2) Using useContext
/* import React, { useContext } from 'react';
import ThemeContext from './contexts/ThemeContext';
import HoverCounter from './HoverCounter';
import IncreamentCounter from './IncreamentCounter';

export default function Content() {
  const context = useContext(ThemeContext);
  const { theme, switchTheme } = context;

  return (
    <div className="main">
      <h2>This is a Content</h2>
      <IncreamentCounter>
        {(count, increament) => (
          <HoverCounter
            count={count}
            increament={increament}
            theme={theme}
            switchTheme={switchTheme}
          />
        )}
      </IncreamentCounter>
    </div>
  );
} */

// Option-3(Class Component-1) Using Consumer
import React from 'react';
import ThemeContext from './contexts/ThemeContext';
import HoverCounter from './HoverCounter';
import IncreamentCounter from './IncreamentCounter';

export default class Content extends React.Component {
  render() {
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
}

// Option-4(Class Component-2) Using contextType
/* import React from 'react';
import ThemeContext from './contexts/ThemeContext';
import HoverCounter from './HoverCounter';
import IncreamentCounter from './IncreamentCounter';

export default class Content extends React.Component {
  render() {
    const { theme, switchTheme } = this.context;

    return (
      <div className="main">
        <h2>This is a Content</h2>
        <IncreamentCounter>
          {(count, increament) => (
            <HoverCounter
              count={count}
              increament={increament}
              theme={theme}
              switchTheme={switchTheme}
            />
          )}
        </IncreamentCounter>
      </div>
    );
  }
}

Content.contextType = ThemeContext;
 */
