import { locationFetch } from '../helpers/fetchData';

export default function clickHandler() {
  const searchBtn = document.querySelector('.btn-div');
  const searchInput = document.querySelector('.search-form');
  const inputcity = document.querySelector('#city');

  searchBtn.addEventListener('click', () => {
    searchInput.classList.toggle('active');
  });
  searchInput.addEventListener('submit', (e) => {
    e.preventDefault();
    locationFetch(inputcity.value);
    searchInput.classList.remove('active');
  });
}
