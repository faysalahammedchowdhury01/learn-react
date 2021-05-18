import React from 'react';

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit',
};

export default function TemperatureImput({
  temperature,
  onTemperatureChange,
  scale,
}) {
  return (
    <fieldset>
      <legend>Enter temperature in {scaleNames[scale]}:</legend>
      <input
        onChange={(e) => onTemperatureChange(e, scale)}
        type="number"
        value={temperature}
      />
    </fieldset>
  );
}
