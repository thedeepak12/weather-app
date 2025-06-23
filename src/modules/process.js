function getWindDirection(deg) {
  const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
  const index = Math.round(deg / 45) % 8;
  return directions[index];
}

export function processWeatherData(data) {
  const {
    name: city,
    main: { temp, feels_like, humidity, pressure },
    weather: [{ description: condition }],
    wind: { speed, deg },
    visibility,
  } = data;

  const temperature = (temp - 273.15).toFixed(1);
  const feelsLike = (feels_like - 273.15).toFixed(1);
  const windDirection = getWindDirection(deg);
  const dewPoint = (temperature - (100 - humidity) / 5).toFixed(1);

  return {
    city,
    temperature,
    feelsLike,
    condition,
    windSpeed: `${speed}m/s ${windDirection}`,
    pressure: `${pressure}hPa`,
    humidity: `${humidity}%`,
    dewPoint: `${dewPoint}°C`,
    visibility: `${visibility / 1000}km`,
  };
}
