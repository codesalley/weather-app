import showData from '../view/showWeather';

const apiKey = "d99b973d20d539514e32d6e226a97250";
const api = "https://api.openweathermap.org/data/2.5/weather?";

function loader() {
  const loader = document.querySelector('.loader');
  loader.classList.add('active-loader')

}
function hideloader () {
  const loader = document.querySelector('.loader');
  setTimeout(() => {
    
    loader.classList.remove('active-loader')
  }, 3000);
}

function handleError(res) {
  if (!res.ok) {
    location.reload();
    throw new Error("check your network");
  }
  return res.json();
}

async function loglanFetch(codinates) {
  loader();
  if (!codinates) {
    console.log("error");
  } else {
   const response = await fetch(
      api +
        `lat=${codinates.latitude}&lon=${codinates.longitude}&appid=${apiKey}&units=metric`
    )
    const data = await handleError(response);

    showData(data);
    hideloader ()
  }
}

async function locationFetch(city) {
  loader() 
    if (!city) {
        console.log("error");
      } else {
       const response = await fetch(
          api +
            `q=${city}&appid=${apiKey}&units=metric`
        )
        const data = await handleError(response);
        showData(data);
        hideloader ()
      }
}

export { locationFetch, loglanFetch };
