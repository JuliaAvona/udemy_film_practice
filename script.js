'use strict';

let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '33');

const personalMovieBD = {
    count: 0,
    movies: {},
    actors: {},
    genres: {},
    privat: false,
};

personalMovieBD.count = numberOfFilms;

let lastFilmOne = prompt('Один из последних просмотренных фильмов?', 'Lord of the Rings');
let ratingFilmOne = prompt('На сколько оцените его?', '7.5');
let lastFilmTwo = prompt('Один из последних просмотренных фильмов?', 'Lord of the Rings');
let ratingFilmTwo = prompt('На сколько оцените его?', '7.5');

personalMovieBD.movies[lastFilmOne] = ratingFilmOne;
personalMovieBD.movies[lastFilmTwo] = ratingFilmTwo;

console.log(personalMovieBD);
console.log(lastFilmOne);
console.log(lastFilmTwo);