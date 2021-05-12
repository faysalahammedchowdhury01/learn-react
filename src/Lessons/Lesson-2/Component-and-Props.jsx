import React, { Component } from 'react';
import ClockClass from './Clock-Class';
import ClockFunction from './Clock-Function';

export default class Lesson2 extends Component {
  render() {
    return (
      <div className="main">
        <ClockClass name="Faysal" locale="bn-BD">
          <span>Class Component</span>
        </ClockClass>
        <ClockFunction name="Faysal" locale="bn-BD">
          <span>Functional Component</span>
        </ClockFunction>
      </div>
    );
  }
}
