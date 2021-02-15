document.addEventListener('DOMContentLoaded', () => {
    const itemForm = document.querySelector('#item-form');
    itemForm.addEventListener('submit', handleItemFormSubmit);

    const deleteAllButton = document.querySelector('#delete-all');
    deleteAllButton.addEventListener('click', handleDeleteAllClick);

})

const handleItemFormSubmit = function (event) {
    event.preventDefault();

    const movieListItem = createMovieListItem(event.target);
    const movieList = document.querySelector('#movie-list')
    movieList.appendChild(movieListItem)

    event.target.reset();

}

const createMovieListItem = function (form) {
    const movieListItem = document.createElement('li');
    movieListItem.classList.add('movie-list-item');

    const title = document.createElement('h2');
    title.textContent = form.title.value;
    movieListItem.appendChild(title);

    const director = document.createElement('h3');
    director.textContent = form.director.value;
    movieListItem.appendChild(director);

    const date = document.createElement('h4');
    date.textContent = form.date.value;   
    movieListItem.appendChild(date); 

    const genre = document.createElement('h4');
    genre.textContent = form.genre.value;   
    movieListItem.appendChild(genre); 

    return movieListItem;

}

const handleDeleteAllClick = function (event) {
   const movieList = document.querySelector('#movie-list');
   movieList.innerHTML = '';


}