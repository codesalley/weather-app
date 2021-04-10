import { locationFetch, loglanFetch } from '../helpers/fetchData'
export default function clickHandler() {
  const searchBtn = document.querySelector(".btn-div");
  const searchInput = document.querySelector(".search-form");
  const inputcity = document.querySelector('#city');

  searchBtn.addEventListener("click", (e) => {
    searchInput.classList.toggle("active");
  });
  searchInput.addEventListener("submit", (e) => {
      e.preventDefault();
      console.log(inputcity.value)
    locationFetch(inputcity.value);
  });
}
