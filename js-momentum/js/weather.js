const API_KEY = "9ba69a074433f1dfe6bd32fc5c0fe81f";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector("#weather .city");
      const weather = document.querySelector("#weather .temp");

      city.innerText = data.name;
      const temp = data.main.temp.toFixed(1);
      weather.innerText = `${data.weather[0].main} / ${temp}°C`;
    });
}

function onGeoError() {
  alert("Can't find you. NO weather for you");
  const weather = document.querySelector("#weather");
  weather.innerText = "위치를 알 수 없음";
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
