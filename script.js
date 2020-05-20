const filters = document.getElementById("filters");
const filterItems = Array.from(filters.children[0]);
const movieList = document.querySelector('#movie-list');
const posters = movies.map(element => element.Poster);
// const submit = document.getElementById("Search").textObject.value; submitOK = "true";

const url = (imdbID) => "https://www.imdb.com/title/" + imdbID;

const addMoviesToDOM = (newArray) => {
    newArray.forEach(movie => {
        let childmovie = document.createElement('li');
        movieList.appendChild(childmovie);
        let childURL = document.createElement('a');
        childmovie.appendChild(childURL);
        childURL.href = url(movie.imdbID);
        let childposter = document.createElement('img');
        childURL.appendChild(childposter);
        childposter.src = movie.Poster;
        console.log(newArray.posters);
    });
}
addMoviesToDOM(movies)

let childURL = document.createElement('a');
movieList.appendChild(childURL)
const removeMoviesFromDOM = () => {
    const child = Array.from(movieList.getElementsByTagName('li'));
    child.forEach(element => movieList.removeChild(element));
}

const filterMovies = (wordInMovieTitle) => {
    let zoekFilms = movies.filter(element => element.Title.includes(wordInMovieTitle));
    console.log(zoekFilms);
    removeMoviesFromDOM();
    addMoviesToDOM(zoekFilms);
}

const filterLatestMovies = () => {
    let zoekFilms = movies.filter(element => element.Year >= 2014);
    console.log(zoekFilms);
    addMoviesToDOM(zoekFilms);
}

const handleOnChangeEvent = () => {
    let vinked = event.target.id;
    switch (vinked) {
        case "Avengers":
            filterMovies("Avengers")
            break;
        case "X-Men":
            filterMovies("X-Men")
            break;
        case "Princess":
            filterMovies("Princess")
            break;
        case "Batman":
            filterMovies("Batman")
            break;
        case "Newest":
            removeMoviesFromDOM();
            filterLatestMovies()
            break;
        case "Search":
            console.log(submit)
    }
}

const addEventListener = () => {
    filterItems.forEach(button => button.addEventListener('click', handleOnChangeEvent))
}

addEventListener(movies)


