import React from 'react';

export default class IncreamentCounter extends React.Component {
  state = {
    count: 0,
  };

  increament = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    const { count } = this.state;
    const { children } = this.props;

    return children(count, this.increament);
  }
}
