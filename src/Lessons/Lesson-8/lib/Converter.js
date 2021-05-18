export function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

export function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

export function convert(temperature, convertTo) {
  return Math.round(convertTo(temperature) * 1000) / 1000;
}
