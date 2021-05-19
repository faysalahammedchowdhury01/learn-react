import React from 'react';
import ThemeContext from './Part-1/contexts/ThemeContext';
import Section from './Part-1/Section';

export default class Lesson12 extends React.Component {
  state = {
    theme: 'dark',
  };

  switchTheme = () => {
    this.setState(({ theme }) => {
      if (theme === 'dark') {
        return {
          theme: 'light',
        };
      } else {
        return {
          theme: 'dark',
        };
      }
    });
  };

  render() {
    const { theme } = this.state;
    return (
      <div className="main">
        <ThemeContext.Provider
          value={{ theme: theme, switchTheme: this.switchTheme }}
        >
          <Section />
        </ThemeContext.Provider>
      </div>
    );
  }
}
