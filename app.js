// const developer = {
//   name: "Alex",
//   surname: "Prybysh",
//   age: 30,
//   skills: ["JavaScript", "TypeScrip", "CSS"],
//   isMaried: false,
//   addAge() {
//     this.age++;
//     console.log(this);
//   },
//   getMarried() {
//     this.isMaried = true;
//   },
//   getDivorced() {
//     this.isMaried = false;
//   },
// };

// developer.addAge();

//////////////////////////////////////////////////////////////////

// for (let key in developer) {
//   console.log(key, developer[key]);
// }

// const numbers = [1, 2, 3, 4, 5, 6];

// for (let number of numbers) {
//   console.log(number);
// }

//////////////////////////////////////////////////////////////////
//string methods !!!!!!!!!!!!!!!!

// const str = "Hello World";
// console.log(str.slice(6));
// console.log(str.split(" ").join(" | "));
// console.log(str.toUpperCase());
// console.log(str.toLocaleLowerCase());

//////////////////////////////////////////////////////////////////

// const num = 11180000.15555;
// console.log(num.toFixed(2));
// console.log(num.toLocaleString());

// const correctAnswer = "JavaScript";
// const userAnswer = " javaScript! ";
// const isCorrect = userAnswer
//   .toLowerCase()
//   .includes(correctAnswer.toLowerCase());

// console.log(isCorrect);

//////////////////////////////////////////////////////////////////
// ARRAY METHODS !!!!!!!!!!!!!!!!

// const numbers = [1, 2, 3, 4];

// //POP, PUSH
// // SHIFT, UNSHIFT

// console.log(numbers.includes(4)); //True
// console.log(numbers.indexOf(2)); // 1
// console.log(numbers.indexOf(9)); // -1

// console.log(numbers.slice(0, 2)); // new Arr [1, 2];

// const nums2 = numbers.concat([5, 6, 7]); // concotenation two Arrays numbers + new Arr nums2
// console.log(nums2);

// console.log(numbers.join(", ")); // получим строку с ,  u пробелом;

//////////////////////////////////////////////////////////////////

// ERRORS !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// function sum(a, b) {
//   if (typeof a !== "number" || typeof b !== "number") {
//     throw new Error("В фукцию не переданы числa для сложения");
//   }
//   return a + b;
// }

// try {
//   sum();
// } catch (err) {
//   console.error(err);
// }

// console.log("end");

//////////////////////////////////////////////////////////////////

// RegExp !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// const regex1 = /\w+/;
// const regex2 = new RegExp("\\w+");

// const str = "JavaScript is cool laguage. Everybody should learn JavaScript";
// console.log(/JavaScript/i.test(str)); // i luboj register A or a;

// console.log(str.replace(/javascript/gi, "php")); //g - global

// console.log(str.match(/JavaScript/gi));

//////////////////////////////////////////////////////////////////
//GAME! GUESS THE RIDDLE

// var riddle = {
//   question: "Hanging pear can not be eaten",
//   correctAnswer: "bulb",
//   hints: ["you can eat that", "it is a fruit"],
//   tries: 3,
//   checkAnswer(str) {
//     // TODO: write the logic for checking the correct answer
//     // alert for the user, console.log()
//     if (this.tries < 1) {
//       // === 0
//       return alert("Game over");
//     }

//     if (str.toLowerCase().includes(this.correctAnswer.toLowerCase())) {
//       alert("Correct answer");
//       console.log("Correct answer");
//       this.tries = 0;
//     } else {
//       alert("Incorrect answer");
//       console.log("Incorrect answer");
//       this.tries--;

//       const hint = this.hints[this.tries === 2 ? 0 : 1];

//       if (this.tries) {
//         alert("clue: " + hint);
//       }
//     }
//   },
// };

// window.onload = function () {
//   document.getElementById("riddle").innerText = riddle.question;
// };

// function check() {
//   var input = document.getElementsByTagName("input")[0];

//   var guessedAnswer = input.value;

//   if (guessedAnswer) {
//     // TODO: call the checkAnswer function on the riddle object, passing the answer there
//     riddle.checkAnswer(guessedAnswer);
//   }
// }

//////////////////////////////////////////////////////////////////
//FUNCTION vs Procedury

// function sum(a, b) {
//   return a + b;
// }

// const result = sum(5, 6);
// console.log(result);

// function sum2(a, b) {
//   console.log(a + b);
// }

//////////////////////////////////////////////////////////////////
//FUNCTION CONTEXT

// function sum(a, b) {
//   return a + b;
// }

// const result1 = sum(4, 6);
// const result2 = sum(5, 8);
// console.log(result1, result2);
// фунция существует времененно выполнив свою задачу она удаляутся. переданные значения в функцию (а, б) переходят во временную память, а с помощью фунции return она может присваиваться константе и запысывается уже в глобальную память.

//////////////////////////////////////////////////////////////////
//ВАРИАНТЫ ЗАПИСИ ФУНЦИЙ!
// 1. Function Declaration (Декларация фунции. ОБЪЯВЛЕНИЕ ФУНЦИИ) !!!!!!
// sum(1, 4);
// function sum(a, b) {
//   return a + b;
// }

// // 2. Function Expression (Фунциональное выражение)
// const sum1 = function (a, b) {
//   return a + b;
// };

// // 3. IIFE (Immediately-invoked function expression)
// (function (a, b) {
//   return a + b;
// })(5, 34);

// // 4. Arrow function
// const sum2 = (a, b) => {
//   return a + b;
// };
// const sum3 = (a, b) => a + b;
// const add1 = (x) => x + 1;

// const average = function (a, b, c, d) {
//   // funtion Expression
//   return (a + b + c + d) / 4; // возвращает их среднее арифметическое
// };
// // 1. Создайте стрелочную функцию, которая принимает число и возвращает квадрат этого числа
// const square = (a) => {
//   // or a * a;
//   return a * a;
// };
// // 2.Создайте стрелочную функцию, которая принимает 2 числа и возвращает их произведение. Сохраните функцию в переменную multiply.
// const multiply = (a, b) => {
//   return a * b;
// };

// // 3. Создайте стрелочную функцию, которая принимает возраст, проверяет его на критерий 18+, и в зависимости от проверки: печатает в консоль "welcome" или "access denied". Сохраните функцию в переменную checkAge

// const checkAge = (age) => {
//   if (age >= 18) {
//     console.log("Welcome");
//   } else {
//     console.log("Access Denied");
//   }
// };
