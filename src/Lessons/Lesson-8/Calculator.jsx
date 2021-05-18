import React from 'react';
import BoilingVerdict from './BoilingVerdict';
import { convert, toCelsius, toFahrenheit } from './lib/Converter';
import TemperatureInput from './TemperatureInput';

export default class Calculator extends React.Component {
  state = {
    temperature: 0,
    scale: 'c',
  };

  onTemperatureChange = (e, scale) => {
    this.setState({
      temperature: e.target.value,
      scale,
    });
  };

  render() {
    const { temperature, scale } = this.state;

    const celsius =
      scale === 'f' ? convert(temperature, toCelsius) : temperature;
    const fahrenheit =
      scale === 'c' ? convert(temperature, toFahrenheit) : temperature;

    return (
      <div className="main">
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.onTemperatureChange}
        />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.onTemperatureChange}
        />
        <BoilingVerdict celsius={celsius} />
      </div>
    );
  }
}
