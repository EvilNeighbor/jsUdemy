"use strict";
// let number = 4.6;
// const persone = "Alex";
// const bool = true;
// let und;

// const obj = {
//   name: "John",
//   age: 25,
//   isMarried: false,
// };

// let arr = ["plum.png", "orange.jpg", 6, 25, "apple.jpg"];

// const rusult = confirm("Ate you 18 years old ");
// const answer = prompt("How old are you?", "18");
// console.log(answer * 5);

// const answers = [];

// answers[0] = prompt("What is your name?", "");
// answers[1] = prompt("Haw old are toy?", "");
// answers[2] = prompt("Are you married?", "");
// console.log(typeof answers);

// const category = "toys";
// const user = "Ivan";
// console.log(`https://google.com/${category}/5`);
// alert(`Привет,${user}`);

// console.log(4 + "5");

// let incr = 20,
//   decr = 15;/

// ++incr;
// --decr;
// console.log(incr % decr);
// console.log(2 * 2 + 2 == "6");

// const a = false,
//   b = false;

// console.log(a || !b);

//  First home work

let numberOfFilms = +prompt("Сколько фильмов вы посмотрели", "");
let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const a = prompt("Один из последних просмотренных фильмов?"),
  b = prompt("На сколько оцените его?"),
  c = prompt("Один из последних просмотренных фильмов?"),
  d = prompt("На сколько оцените его?");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

//  First home work
//  Second home work
//  Second home work
