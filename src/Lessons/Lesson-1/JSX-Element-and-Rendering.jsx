import React, { Component } from 'react';

export default class Lesson1 extends Component {
  render() {
    return (
      <div className="main">
        <h2>Hello {new Date().toLocaleTimeString()}</h2>
      </div>
    );
  }
}

/* 
const element = (
    <h1 classname="app">
        <span>Hello World!</span>
        <img src="img" />
    <h1>
);

<<<<< JSX is an Object >>>>>

const element = {
  type: 'h1',
  props: {
    className: 'app',
    children: [
      {
        type: 'span',
        props: {
          children: 'Hello World!',
        },
      },
      {
        type: 'img',
        props: {
          children: 'img',
        },
      },
    ],
  },
};

ReactDOM.render(element, document.getElementById('root'));
*/
