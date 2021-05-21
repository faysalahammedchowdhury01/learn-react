import React, { Component } from 'react';

class ClassState extends Component {
  state = {
    text: 'React',
    warning: null,
  };

  handleChange = (e) => {
    const value = e.target.value;
    const warning = value.includes('.js') ? 'You need Javascript Skill' : null;

    this.setState({
      text: value,
      warning: warning,
    });
  };

  render() {
    const { text, warning } = this.state;

    return (
      <div className="main">
        <hr />
        <h2>Using Class</h2>
        <div className="display">{text ? text : 'empty!'}</div>
        <input onChange={this.handleChange} type="text" value={text} />
        <div className="warning">{warning || 'Good Choice!'}</div>
        <hr />
      </div>
    );
  }
}

export default ClassState;
