import { locationFetch } from '../helpers/fetchData';

export default function clickHandler() {
  const searchBtn = document.querySelector('.btn-div');
  const searchInput = document.querySelector('.search-form');
  const inputcity = document.querySelector('#city');
  const temp = document.querySelector('.tmp');

  searchBtn.addEventListener('click', () => {
    searchInput.classList.toggle('active');
  });
  searchInput.addEventListener('submit', (e) => {
    e.preventDefault();
    locationFetch(inputcity.value);
    searchInput.classList.remove('active');
  });
  let switchTemp = false;
  const togggledSwitch = () => {
    switchTemp = !switchTemp;
  };

  temp.addEventListener('click', () => {
    const tmpData = temp.textContent.split('');
    togggledSwitch();
    if (switchTemp === true) {
      tmpData.pop();
      let tempToInt = parseInt(tmpData.join(''), 10);
      tempToInt = Math.floor((tempToInt / 5) * 9 + 32);
      temp.innerHTML = `${tempToInt}℉`;
    } else {
      tmpData.pop();
      let tempToInt = parseInt(tmpData.join(''), 10);
      tempToInt = Math.floor(((tempToInt - 32) * 5) / 9);
      temp.innerHTML = `${tempToInt}℃`;
    }
  });
}
