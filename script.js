"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

let lastFilmOne = prompt("Один из последних просмотренных фильмов?", ""),
  ratingFilmOne = prompt("На сколько оцените его?", ""),
  lastFilmTwo = prompt("Один из последних просмотренных фильмов?", ""),
  ratingFilmTwo = prompt("На сколько оцените его?", "");

personalMovieDB.movies[lastFilmOne] = ratingFilmOne;
personalMovieDB.movies[lastFilmTwo] = ratingFilmTwo;

console.log(personalMovieDB);