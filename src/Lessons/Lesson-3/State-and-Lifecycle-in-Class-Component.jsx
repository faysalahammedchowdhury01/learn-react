import React, { Component } from 'react';

export default class Lesson3 extends Component {
  // state = {}; // shortcut state
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

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

  render() {
    const { locale } = this.props;
    const { date } = this.state;

    return (
      <div className="main">
        <h2>Time: {date.toLocaleTimeString(locale)}</h2>
      </div>
    );
  }
}
