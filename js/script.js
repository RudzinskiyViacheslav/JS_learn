"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '');
const personalMovieDB = {

    count: numberOfFilms,
    movies: {},
    actors: {},
    genders: [],
    privat: false,
};

for (let i = 0; i < 2; i++) {
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

    let answer11 = prompt('Один их последних просмотренных фильмов?', ''),
        answer12 = prompt('На сколько оцените его?', '');

    while (!((answer11.length <= 50) && (answer11 != '') && (answer11 != null) && (answer12.length <= 50) && (answer12 != '') && (answer12 != null))) {
        answer11 = prompt('Один их последних просмотренных фильмов?', '');
        answer12 = prompt('На сколько оцените его?', '');
    }

    personalMovieDB.movies[answer11] = answer12;
}

if (10 > personalMovieDB.count) {
    console.log('Просмотрено слишком мало фильмов');
} else if (personalMovieDB.count <= 30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count > 30) {
    console.log('Вы киноман!');
} else {
    console.log('Произошла ошибка');
}

console.log(personalMovieDB);