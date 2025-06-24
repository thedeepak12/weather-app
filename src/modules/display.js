export function displayWeatherInfo(data) {
  const card = document.querySelector('.card');
  card.textContent = '';
  card.style.display = 'flex';

  const cityDisplay = document.createElement('h1');
  const tempDisplay = document.createElement('p');
  const feelsLikeDisplay = document.createElement('p');
  const humidityDisplay = document.createElement('p');
  const windDisplay = document.createElement('p');
  const pressureDisplay = document.createElement('p');
  const dewPointDisplay = document.createElement('p');
  const visibilityDisplay = document.createElement('p');
  const descDisplay = document.createElement('p');
  const weatherIcon = document.createElement('div');

  cityDisplay.textContent = data.city;
  tempDisplay.textContent = `Temperature: ${data.temperature}°C`;
  feelsLikeDisplay.textContent = `Feels like: ${data.feelsLike}°C`;
  humidityDisplay.textContent = `Humidity: ${data.humidity}`;
  windDisplay.textContent = `Wind: ${data.windSpeed}`;
  pressureDisplay.textContent = `Pressure: ${data.pressure}`;
  dewPointDisplay.textContent = `Dew point: ${data.dewPoint}`;
  visibilityDisplay.textContent = `Visibility: ${data.visibility}`;
  descDisplay.textContent = `Condition: ${data.condition}`;

  cityDisplay.classList.add('cityDisplay');
  tempDisplay.classList.add('tempDisplay');
  feelsLikeDisplay.classList.add('tempDisplay');
  humidityDisplay.classList.add('humidityDisplay');
  windDisplay.classList.add('humidityDisplay');
  pressureDisplay.classList.add('humidityDisplay');
  dewPointDisplay.classList.add('humidityDisplay');
  visibilityDisplay.classList.add('humidityDisplay');
  descDisplay.classList.add('descDisplay');
  weatherIcon.classList.add('weatherIcon');

  const iconImg = document.createElement('img');
  const iconUrl = `http://openweathermap.org/img/wn/${data.iconCode}@2x.png`;
  iconImg.src = iconUrl;
  iconImg.alt = data.condition || 'Weather icon';
  iconImg.onerror = () => {
    iconImg.src = '';
  };
  weatherIcon.appendChild(iconImg);

  card.appendChild(cityDisplay);
  card.appendChild(weatherIcon);
  card.appendChild(tempDisplay);
  card.appendChild(feelsLikeDisplay);
  card.appendChild(humidityDisplay);
  card.appendChild(windDisplay);
  card.appendChild(pressureDisplay);
  card.appendChild(dewPointDisplay);
  card.appendChild(visibilityDisplay);
  card.appendChild(descDisplay);
}

export function displayError(message) {
  const card = document.querySelector('.card');
  card.textContent = '';
  card.style.display = 'flex';

  const errorDisplay = document.createElement('p');
  errorDisplay.textContent = message;
  errorDisplay.classList.add('errorDisplay');

  card.appendChild(errorDisplay);
}
