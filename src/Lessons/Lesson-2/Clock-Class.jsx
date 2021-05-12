import React, { Component } from 'react';

export default class ClockClass extends Component {
  render() {
    const { children, name, locale } = this.props;
    return (
      <div className="main">
        <h2>
          {children} - Hello {name} - {new Date().toLocaleTimeString(locale)}
        </h2>
      </div>
    );
  }
}
