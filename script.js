// //start practice new film app
// let numberOfFilms;

// function start() {
//   numberOfFilms = +prompt('How much films do you already watch', '');

//   while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//     numberOfFilms = +prompt('How much films do you already watch', '');
//   }
// }

// start();

// const personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
// };

// function rememberMyFilms() {
//   for (let i = 0; i < 2; i++) {
//     const a = prompt('One of the last film wich you have watched is ?', '');
//     const b = prompt('Please rate this film', '');

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//       personalMovieDB.movies[a] = b;
//       console.log('done');
//     } else {
//       console.log('error');
//       i--;
//     }
//   }
// }

// rememberMyFilms();

// function writeYourGenres() {}

// function detectPersonalLevel() {
//   if (personalMovieDB.count < 10) {
//     console.log('просмотрено довольно мало фильмов');
//   } else if (personalMovieDB.count >= 10 && personalMovieDB < 30) {
//     console.log('Вы киноман!');
//   } else if (personalMovieDB.count >= 30) {
//     console.log('Вы киноман!');
//   } else {
//     console.log('error');
//   }
// }

// detectPersonalLevel();

// function showMyBD(hidden) {
//   if (!hidden) {
//     console.log(personalMovieDB);
//   }
// }

// showMyBD(personalMovieDB.privat);

// function writeYourGenres() {
//   for (let i = 1; i <= 3; i++) {
//     personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номер ${i}`);
//   }
// }
// writeYourGenres();
// //added commit
