"use strict";

let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели','');

const personalMovieDB = {

    count : numberOfFilms,
    movies : {},
    actors : {},
    genders : [],
    privat : false
}

let answer11 = prompt('Один их последних просмотренных фильмов?','');
let answer12 = prompt('На сколько оцените его?','');
let answer21 = prompt('Один их последних просмотренных фильмов?','');
let answer22 = prompt('На сколько оцените его?','');

personalMovieDB.monies.answer11 = answer12;
personalMovieDB.movies.answer21 = answer22;

console.log(personalMovieDB.movies);