"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели','');

const personalMovieDB = {

    count : numberOfFilms,
    movies : {},
    actors : {},
    genders : [],
    privat : false,
};

const answer11 = prompt('Один их последних просмотренных фильмов?','');
const answer12 = prompt('На сколько оцените его?','');
const answer21 = prompt('Один их последних просмотренных фильмов?','');
const answer22 = prompt('На сколько оцените его?','');

personalMovieDB.movies[answer11] = answer12;
personalMovieDB.movies[answer21] = answer22;

console.log(personalMovieDB);