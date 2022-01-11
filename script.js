function displayWeather(data) {
  const { name } = data;
  const { temp, humidity } = data.main;
  const { icon, description } = data.weather[0];
  const { speed } = data.wind;

  document.querySelector(".location").innerText = `Weather in ${name}`;
  document.querySelector(".temp").innerText = `${temp}°C`;
  document.querySelector(
    ".icon"
  ).src = `https://openweathermap.org/img/wn/${icon}.png`;
  document.querySelector(".climate").innerText = `${description}`;
  document.querySelector(".humidity").innerText = `Humidity: ${humidity}%`;
  document.querySelector(".wind").innerText = `Wind speed: ${speed} km/h`;

  const URL = `https://source.unsplash.com/1600x1080/?${name}`;
  document.body.style.backgroundImage = `url(${URL})`;
}

function fetchWeather(cityName) {
  const API_KEY = "ef0022da8734e11c7fa3b83e4238b9be";
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`;

  fetch(URL)
    .then((response) => response.json())
    .then((data) => displayWeather(data));
}

function search() {
  const cityName = document.querySelector(".input").value;
  fetchWeather(cityName);
}

const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  search();
});

document.querySelector(".input").addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    search();
  }
});
