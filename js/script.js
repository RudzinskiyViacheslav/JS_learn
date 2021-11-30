"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '');
    }

}

start();
const personalMovieDB = {

    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

// let flag = false;
// let answer11, answer12;
// while (!flag) {
//     answer11 = prompt('Один их последних просмотренных фильмов?', '');
//     answer12 = prompt('На сколько оцените его?', '');

//     if ((answer11.length <= 50) && (answer11 != '') && (answer11 != null) && (answer12.length <= 50) && (answer12 != '') && (answer12 != null)) {
//         flag = true;
//     }
// }
// personalMovieDB.movies[answer11] = answer12;

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let answer11 = prompt('Один их последних просмотренных фильмов?', ''),
            answer12 = prompt('На сколько оцените его?', '');

        while (!((answer11.length <= 50) && (answer11 != '') && (answer11 != null) && (answer12.length <= 50) && (answer12 != '') && (answer12 != null))) {
            answer11 = prompt('Один их последних просмотренных фильмов?', '');
            answer12 = prompt('На сколько оцените его?', '');
        }

        personalMovieDB.movies[answer11] = answer12;
    }
}
rememberMyFilms();

function detectPersonalLevel() {
    if (10 > personalMovieDB.count) {
        console.log('Просмотрено слишком мало фильмов');
    } else if (personalMovieDB.count <= 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count > 30) {
        console.log('Вы киноман!');
    } else {
        console.log('Произошла ошибка');
    }
}

detectPersonalLevel();

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        personalMovieDB.genres.push(prompt(`Ваш любимый жанр под номером ${i+1}`, ''));
    }
}

writeYourGenres();

function showMyDB() {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
}

showMyDB();

console.log('Программа дошла до конца');