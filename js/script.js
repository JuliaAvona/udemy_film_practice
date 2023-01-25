/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const adv = document.querySelectorAll('.promo__adv img'),
      promoGenre = document.querySelector('.promo__genre'),
      poster = document.querySelector('.promo__bg'),
      promoFilmList = document.querySelectorAll('.promo__interactive-item');

adv.forEach (item => { //1) Удалить все рекламные блоки со страницы (правая часть сайта)
    item.remove();
});

promoGenre.textContent = 'драма'; //2) Изменить жанр фильма, поменять "комедия" на "драма"
poster.style.cssText = 'background: url(../img/bg.jpg) center center/cover no-repeat;'; // 3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img. Реализовать только при помощи JS
movieDB.movies.sort(); // 4) Список фильмов на странице сформировать на основании данных из этого JS файла. Отсортировать их по алфавиту 

function showCinemaList() {
    for (let i = 0; i < movieDB.movies.length; i++) {  //5) Добавить нумерацию выведенных фильмов */
        promoFilmList[i].textContent = `${i+1}. ${movieDB.movies[i]}`;
    }
}
showCinemaList();