import './style.css';
import { fetchWeather } from './modules/api';
import { processWeatherData } from './modules/process';
import { displayWeatherInfo, displayError } from './modules/display';

const weatherForm = document.querySelector('.weather-form');
const cityInput = document.querySelector('.city-input');

weatherForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const city = cityInput.value.trim();
  if (city) {
    try {
      const weatherData = await fetchWeather(city);
      const processedData = processWeatherData(weatherData);
      displayWeatherInfo(processedData);
    } catch (error) {
      displayError(error.message);
    }
  }
});
