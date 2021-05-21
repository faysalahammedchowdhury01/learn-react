import React, { Component } from 'react';

class ClassComponent extends Component {
  state = {
    time: new Date(),
    count: 0,
  };

  componentDidMount() {
    const { count } = this.state;
    document.title = count;
    this.timer = setInterval(() => this.tick(), 1000);
  }

  componentDidUpdate() {
    const { count } = this.state;
    document.title = count;
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick() {
    this.setState({
      time: new Date(),
    });
  }

  add = () => {
    this.setState((state) => ({
      count: state.count + 1,
    }));
  };

  render() {
    const { time } = this.state;

    return (
      <div className="main">
        <p>Time : {time.toLocaleTimeString()}</p>
        <button onClick={this.add}>Add</button>
      </div>
    );
  }
}

export default ClassComponent;
