const numberOfFilms = +prompt('How many films have you seen?');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: {},
  privat: false,
};

let lastWatchedMovie = prompt('What was your last movie you watched?');
let lastWatchedMovieRate = +prompt('What rating would you give this movie?');

personalMovieDB.movies[lastWatchedMovie] = lastWatchedMovieRate;

console.log(personalMovieDB.movies);
