import React from 'react';

function withCounter(OriginalComponent) {
  class NewComponent extends React.Component {
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

      return <OriginalComponent increament={this.increament} count={count} />;
    }
  }
  return NewComponent;
}

export default withCounter;
