//start practice new film app
const numberOfFilms = +prompt('How much films do you already watch', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

for (let i = 0; i < 2; i++) {
  const a = prompt('One of the last film wich you have watched is ?', '');
  const b = prompt('Please rate this film', '');

  if (a != null && b != null && a != '' && b != '' && a.length < 50) {
    personalMovieDB.movies[a] = b;
    console.log('done');
  } else {
    console.log('error');
    i--;
  }
}

if(personalMovieDB.count)

console.log(personalMovieDB);
