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
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

// for (let key in developer) {
//   console.log(key, developer[key]);
// }

// const numbers = [1, 2, 3, 4, 5, 6];

// for (let number of numbers) {
//   console.log(number);
// }

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
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
//////////////////////////////////////////////////////////////////
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
//////////////////////////////////////////////////////////////////
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
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

// RegExp !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// const regex1 = /\w+/;
// const regex2 = new RegExp("\\w+");

// const str = "JavaScript is cool laguage. Everybody should learn JavaScript";
// console.log(/JavaScript/i.test(str)); // i luboj register A or a;

// console.log(str.replace(/javascript/gi, "php")); //g - global

// console.log(str.match(/JavaScript/gi));

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
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
//////////////////////////////////////////////////////////////////
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
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
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

//////////////////////////////////////////////////////////////////
// Scope ! (ОБЛАСТЬ ВИДИМОСТИ!!!!) контекст области памяти (контекст вызова фунции после вычислений уничтожается) во внешнюю. глобалную память вычисления фунции передаются с помощью RETURN !!!

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//  Higher order function (ФУНЦИИ ВЫСШЕГО ПОРЯДКА!)
// CallBack functions
// function twoSquared() {
//   return 2 * 2;
// }
// console.log(twoSquared());

// function threeSquared() {
//   return 3 * 3;
// }
// console.log(threeSquared());

// function copyArrayAndSquareNums(arr) {
//   const output = [];
//   for (let i = 0; i < arr.length; i++) {
//     output.push(arr[i] ** 2); //  * arr[i]);
//   }
//   return output;
// }
// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const res = copyArrayAndSquareNums(nums);
// console.log(res);

// function copyArrayAndDivideByTwo(arr) {
//   const output = [];

//   for (let i = 0; i < arr.length; i++) {
//     output.push(arr[i] / 2);
//   }
//   return output;
// }

// const res2 = copyArrayAndDivideByTwo(nums);
// console.log(res2);

// function copyArrayAndDosmth(arr, instructions) {
//   const output = [];

//   for (let i = 0; i < arr.length; i++) {
//     output.push(instructions(arr[i]));
//   }
//   return output;
// }

// передаем эту функцию в КАЧЕСТВЕ ПАРАМЕТРА в другие функции или методы
// function numSquared(num) {
//   return num * num;
// }

// передаем эту функцию в КАЧЕСТВЕ ПАРАМЕТРА в другие функции или методы
// function divedeBy2(num) {
//   return num / 2;
// }

// const result = copyArrayAndDosmth([1, 2, 3, 4, 5, 6], numSquared); //Принимают фунцию и внутри себя использует
// const result2 = copyArrayAndDosmth([120, 312, 1, 23, 2, 3, 12, 3], divedeBy2); //Принимают фунцию и внутри себя использует
// console.log(`${result}, ${result2}`);

/////////////////////////// ZADANIE \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
/////////////////////////// ZADANIE \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
/////////////////////////// ZADANIE \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// function filterArray(array, callback) {
//   const newArray = [];
//   for (let i = 0; i < array.length; i += 1) {
//     if (callback(array[i])) newArray.push(array[i]);
//   }
//   return newArray;
// }
// const numbers = [1, 2, 3, 4, 5];

// function isOdd(num) {
//   // НЕЧЕТ!!!!!!
//   return num % 2 !== 0 continue

// }
// function isEven(num) {
//   // ЧЕТ!!!!
//   return num % 2 === 0;
// }

// // Для проверки используйте логи
// console.log(filterArray(numbers, isEven)); // Должен вывести: [2, 4]
// console.log(filterArray(numbers, isOdd)); // Должен вывести: [1, 3, 5]

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//  RECURSION !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// РЕКУРСИЯ - ЭТО ФУНКЦИЯ КОТОРАЯ ВЫЗЫВАЕТ САМУ СЕБЯ!!!!
// 1. БАЗОВЫЕ УСЛОВИЯ (терминально) return. if (n === 0) return 1;
// 2. ПРАВИЛО ДВИЖЕНИЯ по РЕКУРСИИ.

// function factorial(n) {
//   if (n === 0) return 1;
//   return n * factorial(n - 1);
// }
// console.log(factorial(3)); // we waiting 3 * 2 * 1  = 6 - это будет ФАКТОРИАЛ 3 \\ factorial(4) если передадим 4 тогда 4 * 3 * 2 * 1 = 24 Это будет факториал 4

// принимает символ и возвращает этот символ в 5 экземплярахю (если передадим ьуквы "А" то ждем получения 5 букв "А")

// ZADANIE !!!!!!!!!!!!!!!'

// let counter = 0;
// function repeater(char) {
//   counter++;

//   if (counter === 5) {
//     counter = 0;
//     return char;
//   }

//   return char + repeater(char);
// }

// console.log(repeater("x"));
// console.log(repeater("a2"));
//////////////////////////////////////////////
//////////////////////////////////////////////
// Практика на рекурсию
// Напишите функцию getLength, которая в качестве параметра будет принимать массив и рекурсивно высчитывать его длину (количество элементов).

// По условию задачи нельзя использовать встроенное свойство length массива.

// Используйте метод pop для удаления элементов массива, чтобы подсчитать итоговое количество.
// const arr1 = [12, 125, 1, 234];

// function getLength(arr) {
//   if (arr1.pop() === undefined) return 0;

//   return 1 + getLength(arr1);
// }

// console.log(getLength(arr1));

/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
// Closure !!!!!!!!!!!! ЗАМЫКАНИЯ!!!!!!!!!!!
// 1. Замыкания это функции, которын возвращаются из других функций.
// 2. Возвращаемая функция запоминает область видиомости все переменные которые вокруг себя видит (SCOPE)

// function hello(name) {
//   const helloName = () => console.log("hello", name);
//   return helloName;
// }

// const helloWorld = hello("World");
// helloWorld();

// const helloJohn = hello("John");
// helloJohn();

// ///////////////////////////////////////
// function outer() {
//   let counter = 0;

//   const incrementCounter = () => console.log(++counter);

//   return incrementCounter;
// }

// const myCouter1 = outer();
// myCouter1();
// myCouter1();
// myCouter1();

// const myCouter2 = outer();
// myCouter2();
// myCouter2();
// myCouter2();
// myCouter2();
// //////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////
// //
// // Практика на замыкание
// // Создайте функцию addByX. Которая принимает 1 параметр (число) и возвращает новую функцию, которая также принимает число и возвращает его сумму с исходным параметром.

// function addByX(x) {
//   return (num) => x + num;
// }

// const addByTwo = addByX(2);
// addByTwo(3); //5
// addByTwo(5); //7

// const addByFour = addByX(4);
// addByFour(3); //7
// addByFour(5); //9

// // Примеры использования:

// // const addByTwo = addByX(2);
// // addByTwo(3); // 5
// // addByTwo(5); // 7

// // const addByFour = addByX(4);
// // addByFour(3); // 7
// // addByFour(5); // 9

///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
//  THIS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const cat = {
  name: "Murka",
  say() {
    const greeting = () => console.log(this.name); //используем стрелочную фунцию для контекста This стрелочная фунцияю СТРЕЛОЧНАЯ ФУНЦИЯ она как некое поведение, она не добавляет никакого своего КОНТЕКСТА. Если бы мы ее сосдали во внешнем мире, то THIS просто бы ссылался на WINDOW. а если она (стрелочная фунция создается в контексте. внутри объекта например), то она ссылается, становиться контекстом этого обЪекта в котором была создалана.

    setTimeout(greeting, 1000);
  },
};

cat.say();
