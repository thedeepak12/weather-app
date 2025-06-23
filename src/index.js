import './style.css';

const weatherForm = document.querySelector('.weather-form');
const cityInput = document.querySelector('.city-input');

weatherForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const city = cityInput.value.trim();
  if (city) {
    console.log('City entered: ', city);
  } else {
    console.log('Please enter a city');
  }
});
