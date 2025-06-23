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
      console.log("Weather data: ", weatherData);
      console.log('Processed data:', processedData);
      displayWeatherInfo(processedData);
    } catch (error) {
      console.error('Error:', error.message);
      displayError(error.message);
    }
  } else {
    console.log('Please enter a city');
  }
});
