const API_KEY = '329429e0b26f6c8a356512099c185418';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export async function fetchWeather(city) {
  const apiUrl = `${BASE_URL}?q=${city}&appid=${API_KEY}`;
  const response = await fetch(apiUrl);

  if (!response.ok) {
    throw new Error('Could not fetch weather data');
  }

  const data = await response.json();

  return data;
}
