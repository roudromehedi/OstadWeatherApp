const apiKey = "7e0c6d3b1a4d4843068bc9a536e7dedf";
const urlBase = "https://api.openweathermap.org/data/2.5/";

function getWeatherData() {
  const place = document.getElementById('locationInput').value;
  fetch(`${urlBase}weather?q=${place}&units=metric&APPID=${apiKey}`)
    .then(res => res.json())
    .then(data => {
      console.log(data); // Output the weather data to the console
      updateWeatherData(data); // Update the UI with the weather data
    })
    .catch(error => {
      console.error("Error fetching weather data:", error);
    });
}

function updateWeatherData(data) {
  const { weather,name, main: { temp, humidity,temp_min,temp_max ,pressure,feels_like} , wind:{speed},sys:{}} = data;
  const [{main,description}]=weather
  
  document.getElementById('locationName').textContent = name;
  document.getElementById('temperature').textContent = temp;
  document.getElementById('humidity').textContent = humidity;
  document.getElementById('weatherDescription').textContent = description;
  document.getElementById('windSpeed').textContent = speed;
  document.getElementById('Conditon').textContent = main;
  document.getElementById('maxTemp').textContent = temp_max;
  document.getElementById('minTemp').textContent = temp_min;
  document.getElementById('pressure').textContent = pressure;
  document.getElementById('feelsLike').textContent = feels_like;
}

function initializeWeatherApp() {
  document.getElementById('search').addEventListener('click', getWeatherData);
}

export { initializeWeatherApp };
