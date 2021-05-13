import React, { Component } from 'react';
import Button from './Button';

export default class Lesson5 extends Component {
  state = {
    date: new Date(),
    locale: 'bn-BD',
  };

  clockTimer = null;

  componentDidMount() {
    this.clockTimer = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clockTimer);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  handleClick = (locale) => {
    this.setState({
      locale,
    });
  };

  render() {
    const { date, locale } = this.state;

    /* let button;
    if (locale === 'bn-BD') {
      button = <Button click={this.handleClick} locale="en-US" />;
    } else {
      button = <Button click={this.handleClick} locale="bn-BD" />;
    } */

    return (
      <div className="main">
        <h2>Time: {date.toLocaleTimeString(locale)}</h2>
        {/* {button} */}
        <Button
          click={this.handleClick}
          locale={locale === 'bn-BD' ? 'en-US' : 'bn-BD'}
          show={locale === 'bn-BD' ? false : true}
          enable={locale === 'bn-BD' ? false : true}
        />
      </div>
    );
  }
}
