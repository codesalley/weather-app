export default function showData(data) {
  const weatherDescription = document.querySelector(".note");
  const temp = document.querySelector(".tmp");
  const location = document.querySelector(".city");
  const time = document.querySelector(".time");
  const icon = document.querySelector(".weather-icon");
  weatherDescription.innerHTML = data['weather'][0]['description'];
  icon.src = 'http://openweathermap.org/img/wn/' + data['weather'][0]['icon'] + '@4x.png';
  temp.innerHTML = Math.floor(data['main']['temp']) + '℃';
  location.innerHTML = data['name'];
}
