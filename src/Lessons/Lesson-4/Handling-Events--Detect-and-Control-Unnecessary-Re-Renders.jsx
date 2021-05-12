import React, { Component } from 'react';
import Button from './Button';

export default class Lesson4 extends Component {
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
    this.setState({ date: new Date() });
  }

  /* Use Arrow Function For 'this' */
  handleClick = (locale) => {
    this.setState({
      locale,
    });
  };

  render() {
    const { date, locale } = this.state;
    return (
      <div className="main">
        <h2>Time: {date.toLocaleTimeString(locale)}</h2>
        {/* Send Props(function) and Pass Arguments */}
        {/* <Button click={this.handleClick.bind(this, 'en-US')} /> --- way 1 - not recommended */}
        {/* <Button click={() => this.handleClick('en-US')} /> --- way2 */}
        <Button click={this.handleClick} locale="en-US" />
        {/* --- way 3 */}
      </div>
    );
  }
}
