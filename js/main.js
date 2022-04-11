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

let numberOfFilms = prompt("Сколько фильмов вы посмотрели", "");
let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

for (let i = 0; i < 2; i++) {
  const a = prompt("Один из последних просмотренных фильмов?", ""),
    b = prompt("На сколько оцените его?", "");
  if (a != null && b != null && a != "" && b != "" && a.length < 50) {
    personalMovieDB.movies[a] = b;
    console.log("Allright");
  } else {
    console.log("So bad");
    i--;
  }
}

if (personalMovieDB.count < 10) {
  console.log("So few films watched");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  console.log("You are classic  viewer");
} else if (personalMovieDB.count >= 30) {
  console.log("You are best viewer");
} else {
  console.log("Error");
}

console.log(personalMovieDB);

// let i = 0;
// while (i < 2) {
//   const a = prompt("Один из последних просмотренных фильмов?", ""),
//     b = prompt("На сколько оцените его?", "");
//   i++;
//   if (a != null && b != null && a != "" && b != "" && a.length < 50) {
//     personalMovieDB.movies[a] = b;
//     console.log("Allright");
//   } else {
//     console.log("so bad");
//     i--;
//   }
// }

// do {
//   const a = prompt("Один из последних просмотренных фильмов?", ""),
//     b = prompt("На сколько оцените его?", "");
//   i++;
//   if (a != null && b != null && a != "" && b != "" && a.length < 50) {
//     personalMovieDB.movies[a] = b;
//     console.log("Allright");
//   } else {
//     console.log("so bad");
//     i--;
//   }
// } while (i < 2);

// Циклы
// let num = 50;
// // while (num <= 55) {
// //   console.log(num);
// //   ++num;
// // }
// let i = 0;

//  First home work утв
// Условия
// if (4 == 4) {
//   console.log("OK");
// } else {
//   console.log("rerro");
// }
// const nub = 99.9;
// if (nub > 200) {
//   console.log("Nub > 200");
// } else if (nub < 100) {
//   console.log("Nub < 100");
// } else {
//   console.log("OK");
// }

// const num = "51";
// switch (num) {
//   case "49":
//     console.log("Wrong");
//     break;
//   case "100":
//     console.log("Wrong2");
//     break;
//   case "50":
//     console.log("Good");
//     break;
//   default:
//     console.log("Not now");
//     break;
// }

// Циклы
// let num = 50;
// // while (num <= 55) {
// //   console.log(num);
// //   ++num;
// // }

// // do {
// //   console.log(num);
// //   num++;
// // } while (num < 55);

// for (let i = 1; i < 10; ++i) {
//   if (i === 7) {
//     continue;
//   }
//   console.log(i);
// }

//  Second homme work

//  Second home work
