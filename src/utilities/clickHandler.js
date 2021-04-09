export default function clickHandler() {
    const searchBtn = document.querySelector('.btn-div');
    const searchInput = document.querySelector('.search-form');

    searchBtn.addEventListener('click', ((e) =>{
        searchInput.classList.toggle('active');

    })); 

};