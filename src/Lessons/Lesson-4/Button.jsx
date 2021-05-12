import React from 'react';

export default class Button extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    const { click: currentClick, locale: currentLocale } = this.props;
    const { click: nextClick, locale: nextLocale } = nextProps;

    if (currentClick === nextClick && currentLocale === nextLocale) {
      return false;
    }
    return true;
  }

  render() {
    /* Receive Props */
    const { click, locale } = this.props;
    return (
      <div className="main">
        <button onClick={() => click(locale)}>Click</button>
      </div>
    );
  }
}
