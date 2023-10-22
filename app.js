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

// ////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////

// for (let key in developer) {
//   console.log(key, developer[key]);
// }

// const numbers = [1, 2, 3, 4, 5, 6];

// for (let number of numbers) {
//   console.log(number);
// }

// ////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////
// string methods !!!!!!!!!!!!!!!!

// const str = "Hello World";
// console.log(str.slice(6));
// console.log(str.split(" ").join(" | "));
// console.log(str.toUpperCase());
// console.log(str.toLocaleLowerCase());

// ////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////

// const num = 11180000.15555;
// console.log(num.toFixed(2));
// console.log(num.toLocaleString());

// const correctAnswer = "JavaScript";
// const userAnswer = " javaScript! ";
// const isCorrect = userAnswer
//   .toLowerCase()
//   .includes(correctAnswer.toLowerCase());

// console.log(isCorrect);

// ////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////
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

// ////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////

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

// ////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////

// RegExp !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// const regex1 = /\w+/;
// const regex2 = new RegExp("\\w+");

// const str = "JavaScript is cool laguage. Everybody should learn JavaScript";
// console.log(/JavaScript/i.test(str)); // i luboj register A or a;

// console.log(str.replace(/javascript/gi, "php")); //g - global

// console.log(str.match(/JavaScript/gi));

// ////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////
// GAME! GUESS THE RIDDLE

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

// ////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////
// FUNCTION vs Procedury

// function sum(a, b) {
//   return a + b;
// }

// const result = sum(5, 6);
// console.log(result);

// function sum2(a, b) {
//   console.log(a + b);
// }

// ////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////
// FUNCTION CONTEXT

// function sum(a, b) {
//   return a + b;
// }

// const result1 = sum(4, 6);
// const result2 = sum(5, 8);
// console.log(result1, result2);
// фунция существует времененно выполнив свою задачу она удаляутся. переданные значения в функцию (а, б) переходят во временную память, а с помощью фунции return она может присваиваться константе и запысывается уже в глобальную память.

// ////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////
// ВАРИАНТЫ ЗАПИСИ ФУНЦИЙ!
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

// ////////////////////////////////////////////////////////////////
// Scope ! (ОБЛАСТЬ ВИДИМОСТИ!!!!) контекст области памяти (контекст вызова фунции после вычислений уничтожается) во внешнюю. глобалную память вычисления фунции передаются с помощью RETURN !!!

// ////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////
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

// ///////////////////////// ZADANIE \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// ///////////////////////// ZADANIE \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// ///////////////////////// ZADANIE \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// ///////////////////////// ZADANIE \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// ///////////////////////// ZADANIE \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
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

// ///////////////////// фильтр СОЗДАЕТ НОВЫЙ МАССИВ, в который войдут те елементы arr, для которых вызов callback(item, i, arr) возвратит TRUE.
// const arr = [1, -1, 2, -2, 3];

// const positiveArr = arr.filter((num) => {
//   return num > 0;
// });
// console.log(positiveArr); // expected new arr[1, 2, 3];

// ////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////
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

// ////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////

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

// ///////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////

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
// //////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////
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

// ////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////

//  THIS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// const cat = {
//   name: "Murka",
//   say() {
//     const greeting = () => console.log(this.name); //используем стрелочную фунцию для контекста This стрелочная фунцияю СТРЕЛОЧНАЯ ФУНЦИЯ она как некое поведение, она не добавляет никакого своего КОНТЕКСТА. Если бы мы ее сосдали во внешнем мире, то THIS просто бы ссылался на WINDOW. а если она (стрелочная фунция создается в контексте. внутри объекта например), то она ссылается, становиться контекстом этого обЪекта в котором была создалана.

//     setTimeout(greeting, 1000);
//   },
// };

// cat.say();

// const developer = {
//   name: "Alex",
//   salary: 2500,

//   getBonus(sum1, sum2) {
//     console.log(
//       this.name,
//       "has a salary this month",
//       this.salary + sum1 + sum2
//     );
//   },
// };
// // developer.getBonus(250);

// const manager = {
//   name: "Viktoriia",
//   salary: 1800,
// };

// developer.getBonus.call(manager, 150, 50);
// developer.getBonus.apply(manager, [150, 50]);
// call и apply просто обращаются и вызывают функцию с конкретным контекстом и конретным параметром, а не создают новую как в случае bind
// developer.getBonus.bind(manager, 150, 50)();
// заимствуем фуеnкцию от developer и при помощи bind присваеваем-виртуально фунцию для manager. (bind в этом случае по своей сути просто создает новую фунцию!!! Тогда как call и apply просто обращаются и вызывают функцию с конкретным контекстом и конретным параметром, а не создают новую как в случае bind)
// manager.getBonus = developer.getBonus.bind(manager);
// manager.getBonus(150, 50);

// //// PRACTISE

// Практика на использование контекста
// Дан объект supporter1. Опишите его метод chant, при вызове которого с задержкой в 1 секунду в консоль выводится сообщение "Forza Milan".

// Затем привяжите к объекту supporter2 метод chant таким образом, чтобы при вызове спустя 1 секунду в консоль выводилось сообщение "Forza Inter".
// const supporter1 = {
//   club: 'Milan',

//   chant() {
//       // Добавьте код
//       return setTimeout(() => {
//           console.log('Forza', this.club);
//       }, 1000)
//   }
// }

// const supporter2 = {
//   club: 'Inter'
// }
// supporter2.chant = supporter1.chant.bind(supporter2);
// supporter2.chant();

// let age = prompt('How old are you?', 18);

// function checkAge(age) {
//   if (age >=18){
//     return true;
//   } else {
//     return confirm('A mama razreszala?')
//   }
// }

// if( checkAge(age) ) {
//   alert( 'Access accept' );
// } else {
//   alert( 'Access denied' );
// }

// function checkAge(age){
//   if(age >= 18){
//     return true;
//   }
//   return confirm('Roditeli razreszili ?')
// }

// function checkAge(age){
//   return (age >= 18) ? confirm('A ty uże bolszoj') : confirm("roditeli razreszali"); //WARIANT ?-togda : - inache
//   return (age >= 18) || confirm('Roditeli razreszalai'); //wariant s ||
// }

// function min(a,b) {
//   if(a < b){
//     return a
//   } else {
//     return b
//   }
// }

// function min(a,b) {
//   return a < b ? a : b;
// }

// ////////////////////////////////////////
// Напишите функцию pow(x,n), которая возводит x в степень n и возвращает результат.

// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1
// Создайте страницу, которая запрашивает x и n, а затем выводит результат pow(x,n).

// function pow(x, n) {
//   return x ** n;
// }
// let x = prompt('BBedite chislo x', '');
// let n = prompt('BBedite stepen', '');
// n < 1 ? alert(`Stepen ${n} nie podderziwaetsia ispolzujte naturalnoje chislo`) : alert(pow(x,n));

// ///////////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////

// function censor() {
//     const censoredArr = []; // [ ['aadas', 'asda'], ['sdfsd', 'sdfsdf'] ]

//     return function(str1, str2 = '') {
//         if(str2) {
//             censoredArr.push([str1, str2]);
//         } else{
//             for (let pair of censoredArr) {
//                 str1 = str1.replace(new RegExp(pair[0], 'gi'), pair[1])
//             }

//             return str1;

//         }
//     }

// }

// const changeScene = censor();

// changeScene('PHP', 'JS'); //['PHP', 'JS'];

// changeScene('backend', 'frontend'); //['backend', 'frontend'];

// console.log(changeScene('PHP is the most popular programming langueage for backend web-developer')); // должно распечатать 'PHP is the most popular programming langueage for backend web-developer'

// ///////////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////

// FIFO, FILO
// Queue - first in, first out.
// push - add element to Arr (добавляет последний елемент массива!)
// shift - delete first of element from Arr (удаляет первый елемент массива!)
// const arr = [];
// arr.push(4);
// arr.push(7);
// arr.push(9);
// console.log(arr); //pered udaleniem u nas w arr 3 elementa arr [4,7,9]

// arr.shift(); //delited first element of arr
// console.log(arr); //posle udalenia ostalos 2 elementa w arr [7,9]

// // Stack - first in, last out !!! FILO
// //FILO
// //push/pop
// const arr2 = [];
// arr2.push(1);
// arr2.push(2);
// arr2.push(3);
// arr2.push(5);

// console.log(arr2);

// arr2.pop();
// arr2.pop();

// console.log(arr2);

// ///////////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////
// Immutable - иммутабельнй, значит НЕ ИЗМЕНЯЕМЫЙ!
// const arr = [1, 2, 3, 4, 5];

// //don't USE POP(), PUSH(), shift(), unshift(), sort(), revers() !!!!!!!!!!!!!!!!
// const newArr = arr.slice(0, 4); // [1, 2, 3, 4];
// const newArr2 = [0, ...arr]; // [0, 1, 2, 3, 4, 5];

// console.log(arr);
// console.log(newArr);
// console.log(newArr2);

// const obj = {
//   a: 1,
//   b: 2,
//   c: 3,
// };

// obj.d = 4; // mutation (do not do like that);
// obj.a = 10; // mutation! (do not do like that);

// const obj2 = {
//   ...obj,
//   a: 10,
//   d: 4,
// }; //{a: 10, b: 2, c: 3, d: 4}

// console.log(obj2);

// ///////////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////
//                          Mapping !!!!!!!!!!!!!!!!!!!!!!!!!!!
//              map, forEach  !!!!!!!!!!!!!!

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// const arr = [];

// // function doubleNum(num) {
// //   arr.push(num * 2);
// // }

// function print(el) {
//   console.log(el);
// }
// // const result = numbers.forEach(print);
// // console.log(result);
// // console.log(numbers);
// function dubleNum(num) {
//   return num * 2;
// }

// const result = numbers.map(num => num * 2); // map always RETURN new ARR!!! we get new arr whit new elements const result = [2, 4, 6, 8, 10, 12, 14, 16] && OLD elements from cosnt numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(result);
// console.log(numbers);

// ////////////////////////// метод "arr.map(callback[, thisArg])" используется для трансформации массива. Он создает новый массив, который будет сосоять из результатов вызова callback(item, i, arr) для каждого елемента arr.

// const names = ["HTML", "CSS", "JavaScript", "React"];

// const nameLengths = names.map(function (name) {
//   return name.length;
// });
// console.log(nameLengths); // expect [4, 3, 10, 5];

// //////////////////////////practice/////////////////////////////////////////////////////
// //////////////////////////practice/////////////////////////////////////////////////////
// //////////////////////////practice/////////////////////////////////////////////////////
// //////////////////////////practice/////////////////////////////////////////////////////
// //////////////////////////practice/////////////////////////////////////////////////////

// Практика на маппинг массивов и коллекций
// 1) Дан массив чисел numbers. Создайте на его основе новый массив doubledNumbers, в котором каждый элемент из оригинального массива умножен на два.

// 2) Дана коллекция developers. Создайте на ее основе новую коллекцию middleDevelopers, увеличив значения ключа salary на 500, а также добавив к ключу skills значение 'TypeScript'.

// const numbers = [1, 22, 12, 66, 90, 51, 11];

// const doubledNumbers = numbers.map((num) => num * 2);

// const developers = [
//   {
//     id: 1,
//     fullName: "Anton Petrov",
//     skills: ["HTML", "CSS", "JavaScript", "Git", "React"],
//     salary: 1000,
//   },
//   {
//     id: 2,
//     fullName: "Ivan Ivanov",
//     skills: ["HTML", "CSS", "JavaScript", "Git", "Vue"],
//     salary: 950,
//   },
//   {
//     id: 3,
//     fullName: "Albert Sidorov",
//     skills: ["HTML", "CSS", "JavaScript", "Git", "jQuery"],
//     salary: 850,
//   },
// ];

// const middleDevelopers = developers.map((dev) => ({
//   id: dev.id,
//   fullName: dev.fullName,
//   skills: [...dev.skills, "TypeScript"],
//   salary: dev.salary + 500,
// }));

// console.log(middleDevelopers);

// //////////////////////////practice MAP/////////////////////////////////////////////////////

// Код ниже получает из массива строк новый массив, содержащий их длины:
// const arr = ["Есть", "жизнь", "на", "Марсе"];

// const arrLength = [];
// for (let i = 0; i < arr.length; i++) {
//   arrLength[i] = arr[i].length;
// }
// console.log(arrLength);

// Перепишите выделенный участок: уберите цикл, используйте вместо него метод map.

// const mapArr = arr.map((el) => {
//   return el.length;
// });

// console.log(mapArr);

// ///////////////////////////////////////////////////

// const arr = [1, 2, 3, 4, 5];
// const arr1 = [-2, -1, 0, 1];
// const getSums = (arr) => {
//   return arr.reduce((acc, el, i, array) => {
//     const sum = array.reduce((result, element, index) => {
//       if (index > i) return result;
//       result += element;
//       return result;
//     }, 0);

//     acc.push(sum);

//     return acc;
//   }, []);
// };

// console.log(getSums());

// //////////////////////////////EVER/SOME///////////////////////////////////////////////////
// //////////////////////////////EVER/SOME///////////////////////////////////////////////////
// //////////////////////////////EVER/SOME///////////////////////////////////////////////////
// //////////////////////////////EVER/SOME///////////////////////////////////////////////////
// //////////////////////////////EVER/SOME///////////////////////////////////////////////////
// Эти методы используются для проверки массива.
// • Метод "arr.every(callback[, thisArg])" возвращает true, если вызов callback вернёт true для каждого елемента arr.
// • Метод "arr.some(callback[, thisArg])" возвращает true, если вызов callback вернёт true для какого-нибудь элемента arr.

// const arr = [1, -1, 2, -2, 3];

// function isPositive(number) {
//   return number > 0;
// }
// console.log(arr.every(isPositive)); //expected false;
// console.log(arr.some(isPositive)); //expected true;

// //////////////////////////////FILTER///////////////////////////////////////////////////
// //////////////////////////////FILTER///////////////////////////////////////////////////
// //////////////////////////////FILTER///////////////////////////////////////////////////
// //////////////////////////////FILTER///////////////////////////////////////////////////
// //////////////////////////////FILTER///////////////////////////////////////////////////
// фильтрация так же должна быть иммутабельна. Мне не должны ломать оригинальый массив. Мы должны создавать новую структуру данных, сохраняя туда отфильтрованные значения.
// примитивные массивы в которых лежат строки, числа, undefined, booleen/ [1,'hi', undefined, true, false]; Массив с примитивами называют массивами, а массивы в которых лежат обЪект называют - Коллекциями.

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// const users = [
//   {
//     id: 1,
//     name: "Brad Pette",
//     movies: ["Snatch", "Inglorious Basterdes"],
//     isMarried: true,
//   },
//   {
//     id: 2,
//     name: "Diana Moore",
//     movies: ["Inglorious Basterdes"],
//     isMarried: false,
//   },
//   {
//     id: 3,
//     name: "Olivie Giroud",
//     movies: ["Inglorious Basterdes"],
//     isMarried: true,
//   },
//   {
//     id: 4,
//     name: "Scott Parker",
//     movies: ["Inglorious Basterdes"],
//     isMarried: false,
//   },
// ];

// // const oddNumbers = numbers.filter((num) => num % 2 !== 0); // expected odd numbers [1, 3, 5, 7];
// // const evenNumbers = numbers.filter((num) => num % 2 === 0); // expected even numbers [2, 4, 6, 8];

// // console.log(oddNumbers);
// // console.log(evenNumbers);

// const marriedUsers = users.filter((user) => user.isMarried === true); //true
// const notMarriedUsers = users.filter((user) => !user.isMarried); //false
// const snatchUsers = users.filter((user) => user.movies.includes("Snatch")); //includes
// console.log(snatchUsers);
// console.log(marriedUsers);
// console.log(notMarriedUsers);

// //////////////////////////////PRACTICE///////////////////////////////////////////////////
// //////////////////////////////PRACTICE///////////////////////////////////////////////////
// //////////////////////////////PRACTICE///////////////////////////////////////////////////
// //////////////////////////////PRACTICE///////////////////////////////////////////////////
// //////////////////////////////PRACTICE///////////////////////////////////////////////////

// Практика на фильтрацию
// 1) Дан массив строк names. Создайте новый массив shortNames, сохранив в него только значения из оригинального массива, длина которых не превышает 5 символов.

// 2) Дана коллекция products. Создайте на базе нее новую коллекцию cheapProducts, поместив в нее только элементы оригинальной коллекции, ключ price в которых ниже 300.

// 3) Дана коллекция developers, где у каждого элемента имеется свойство skills. Создайте новую коллекцию tsDevelopers, добавив туда только те элементы оригинальной коллекции, у которой в массиве skills есть значение 'TypeScript'.

// const names = [
//   "Mikhail",
//   "Ivan",
//   "Albert",
//   "John",
//   "Ian",
//   "Petr",
//   "Alexandr",
//   "Oleg",
//   "Jaroslav",
//   "Vsevolod",
// ];

// const shortNames = names.filter((el) => el.length <= 5);
// console.log(shortNames);

// //////////////////////////////PRACTICE 2///////////////////////////////////////////////////

// const products = [
//   {
//     id: 1,
//     name: "Intro to JavaScript",
//     category: "books",
//     price: 150,
//   },
//   {
//     id: 2,
//     name: "Intro to CSS",
//     category: "books",
//     price: 120,
//   },
//   {
//     id: 3,
//     name: "Deep dive into JavaScript",
//     category: "books",
//     price: 350,
//   },
//   {
//     id: 4,
//     name: "Intro to PHP",
//     category: "books",
//     price: 250,
//   },
//   {
//     id: 5,
//     name: "Deep dive into PHP",
//     category: "books",
//     price: 350,
//   },
// ];

// const cheapProducts = products.filter((product) => product.price <= 300);
// console.log(cheapProducts);

// //////////////////////////////PRACTICE 3///////////////////////////////////////////////////

// const developers = [
//   {
//     id: 1,
//     fullName: "Ivan Ivanov",
//     skills: ["HTML", "CSS", "Git", "Gulp", "Pug"],
//   },
//   {
//     id: 2,
//     fullName: "Petr Petrov",
//     skills: ["HTML", "CSS", "Git", "JavaScript", "npm"],
//   },
//   {
//     id: 3,
//     fullName: "Ian Melnikov",
//     skills: ["HTML", "CSS", "Git", "JavaScript", "TypeScript"],
//   },
//   {
//     id: 4,
//     fullName: "Antonio Banderas",
//     skills: ["HTML", "CSS", "Git", "JavaScript", "TypeScript", "React"],
//   },
// ];

// // const snatchUsers = users.filter((user) => user.movies.includes("Snatch")); //includes
// const tsDevelopers = developers.filter((el) =>
//   el.skills.includes("TypeScript")
// );
// console.log(tsDevelopers);

// вывести все эл. знач. котор. равны знач. первого елменту массива.
// //////////////////////////////FILTER///////////////////////////////////////////////////
// //////////////////////////////FILTER///////////////////////////////////////////////////
// //////////////////////////////FILTER///////////////////////////////////////////////////
// //////////////////////////////FILTER///////////////////////////////////////////////////
// //////////////////////////////FILTER///////////////////////////////////////////////////

// const arr = [12, 2, 1, 2, 3, 1, 1, 2, 10, 9, 10];
// const handleFilter = (num, index, curentArr) => index % 2 === 0 && num === 1;
// // // const handleFilter = (num, index, curentArr) => curentArr.length === num;
// // // const handleFilter = (num, index, currentArr) => {};
// const newArr = arr.find(handleFilter); //find

// // console.log(newArr);
// // const arr2 = [1, 2, 3, 4, 5];
// // function yesOrNo(arr, newFun) {}

// //////////////////////////////METHOD///////////////////////////////////////////////////
// //////////////////////////////METHOD///////////////////////////////////////////////////
// //////////////////////////////METHOD///////////////////////////////////////////////////
// //////////////////////////////METHOD///////////////////////////////////////////////////
// ////////////////////////////////METHOD///////////////////////////////////////////////////

// const person = {
//   name: "Alex",
//   age: 34,
//   job: "frontend",
// //   whoAreYou: function () {
// //     return this.name;
// //   },
// };

// // const whoAreYou () => return this.name;
// function whoAreYou(arg) {
//   return this.age + arg;
// }
// console.log(whoAreYou.call(person, 6))
// // console.log([1,2,3,4,5].join(":"));
// // const result = Array.prototype.join.call("adfhasfhalskdfalkfd", "-----");
// // console.log(result)

// console.log([1, 2, 3, 4, 5].pop());
// const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "asdasd", "qwe", 123, "werwr"];
// let counter = 0;

// function getLength(arr) {
//   console.log(arr);
//   if (arr.pop() === undefined) {
//     return counter;
//   } else {
//     counter++;
//     return getLength(arr);
//   }
// }

// console.log(getLength(arr1));

// function mygcd(x, y) {
//   if (!y) return x;
//   console.log(x, y);
//   return mygcd(y, x % y);
// }
// console.log(mygcd(36, 12));

// const newArr = [0, 4, 6, 8, 8, 8, 5, 5, 7];

// function setReducer(input) {
//   if (input.length === 1) return input[0];

//   const obj = input.reduce((acc, el) => {
//     if (acc[el]) {
//       acc[el] += 1;
//     } else {
//       acc[el] = 1;
//     }
//     return acc;
//   }, {});
//   const nextArray = Object.values(obj);
//   console.log(nextArray);
//   return setReducer(nextArray);
// }
// console.log(setReducer(newArr));

// function setReducer(input) {
//   if (input.length === 1) return input[0];
//   const nextArray = [];
//   let counter = 1;
//   for (let i = 0; i < input.length; i++) {
//     if (input[i + 1] === input[i]) {
//       counter++;
//     } else {
//       nextArray.push(counter);
//       counter = 1;
//     }
//   }

//   return setReducer(nextArray);
// }
// console.log(setReducer([1, 7, 0, 6, 1, 9, 0, 7, 1, 6, 0, 9, 0]));

// const useState = () => {
//   let counter = 0;
//   return { setState: (n) => (counter += n), getState: () => counter };
// };
// const counter = useState();
// counter.setState(3);
// counter.setState(4);

// console.log(counter.getState());

// function average(num) {
//   if (num === 1) return 1;
//   return num + average(num - 1);
// }
// // console.log(average(5));

// function sumFromTo(from, to) {
//   if (to === from) return from;

//   return from + sumFromTo(from + 1, to);
// }
// console.log(sumFromTo(5, 50));
// console.log(sumFromTo(1, 5));

// function factorial(n) {
//   if (n === 0) return 1;
//   return n * factorial(n - 1);
// }
// console.log(factorial(4));

// //////////////////////////////REDUCE///////////////////////////////////////////////////
// //////////////////////////////REDUCE///////////////////////////////////////////////////
// //////////////////////////////REDUCE///////////////////////////////////////////////////
// //////////////////////////////REDUCE///////////////////////////////////////////////////
// //////////////////////////////REDUCE///////////////////////////////////////////////////

// const staff = [
//   {
//     id: 1,
//     name: "John Doe",
//     salary: 1000,
//   },
//   {
//     id: 2,
//     name: "Sara smith",
//     salary: 900,
//   },
//   {
//     id: 3,
//     name: "Elton John",
//     salary: 1100,
//   },
//   {
//     id: 4,
//     name: "Mo Williams",
//     salary: 1000,
//   },
// ];

// const budget = staff.reduce((acc, user) => {
//   return acc + user.salary;
// }, 0);

// console.log(budget);

// const budgetForSmallPersonal = staff.reduce((acc, user) => {
//   if (user.salary < 1000) {
//     return acc + user.salary;
//   }
//   return acc;
// }, 0);

// console.log(budgetForSmallPersonal);

// const salaries = staff.reduce((acc, user) => {
//   return [...acc, user.salary];
// }, []);

// console.log(salaries);

// /////////////////////////////////Практика на reduce///////////////////////////////////
// /////////////////////////////////Практика на reduce///////////////////////////////////
// /////////////////////////////////Практика на reduce///////////////////////////////////
// /////////////////////////////////Практика на reduce///////////////////////////////////
// Дана коллекция товаров в корзине order. У каждого товара есть цена price и количество quantity.
// Подсчитайте общую стоимость товаров в корзине и сохраните значение в переменной totalPrice.

// const order = [
//   {
//     id: 1,
//     name: "Лопата",
//     price: 1000,
//     quantity: 1,
//   },
//   {
//     id: 2,
//     name: "Удочка",
//     price: 1200,
//     quantity: 2,
//   },
//   {
//     id: 3,
//     name: "Ведро",
//     price: 500,
//     quantity: 3,
//   },
//   {
//     id: 4,
//     name: "Мороженое",
//     price: 100,
//     quantity: 8,
//   },
// ];

// const totalPrice = order.reduce((acc, thing) => {
//   return acc + thing.price * thing.quantity;
// }, 0);

// console.log(totalPrice);

// /////////////////////////////////Практика на reduce///////////////////////////////////
// /////////////////////////////////Практика на reduce///////////////////////////////////
// const arr = [1, 2, 3, 4, 5];

// const result = arr.reduce((acc, sum) => {
//   return acc + sum;
// }, 0);

// console.log(result); // expected result 15; По умолчани acc равен = 0 (это значение мы сами выставили изначально),А  sum равен перому елементу массива в нашем случае он равен = 1. По условию внутри тела фунции return acc + sum; acc 0 + sum 1(значение первего елемента массива) получаем = 1, затем в acc перезаписывается значение елемент с 0 на 1, а в sum попадает следующий елемент массива в нашем случае это 2. Следовательно - acc теперь имеет значение 1 + sum 2 = 3 (новый полученный результат записывается в асс) поэтому получаем следующий шаг acc равен теперь 3, а в sum принимает следующий елемент из списка массива в нашем случае это 3. Затем тело фунции делает свою работу АСС = 3 sum = 3 = 6. в АСС теперь попадает 6, а в sum падает новой елемент массива, в нашем случае это 4. АСС 6 + sum 4 = 10 теперь 10 попадает в АСС а в sum вновь подставяется следующий по очереди елемент из массива в нашем случае это 5. получаем АСС в себе хранит 10 + sum 5 = 15.

// REDUCE names. найти кол-во имен. вывести об. с кол-вом повторяющихся имен.
// const names = ["eugene", "eugene", "andrew", "michael", "eugene", "andrew"];

// const obj = names.reduce((acc, el) => {
//   if (acc[el]) {
//     acc[el] += 1;
//   } else {
//     acc[el] = 1;
//   }
//   return acc;
// }, {});

// console.log(obj);
// в данном случае АСС это наш пустой объект. Начинается работа встроенного в reduce цикла. Который бежит по нашему массиву и мы определили его поведение, что будет делать цикл после того как возьмет наше елемент. он берет наш елемент из массива.

// const lexa = "lexa";
// const lexaArr = ["l", "e", "x", "a"];
// const lexaObj = {
//   0: "l",
//   1: "e",
//   2: "x",
//   3: "a",
//   length: 4,
// };

// console.log(lexa.indexOf("x"));
// console.log(lexaArr.indexOf("x"));
// console.log(lexaObj.indexOf("x"));
// console.log(lexa.indexOf("t"));
// console.log(lexaArr.indexOf("t"));
// console.log(lexa.findIndex("e"));
// console.log(lexaArr.findIndex((el) => el === "t"));
// const arr = [1, 2, 3, 4, 5];
// let sum = 0;

// // arr.forEach((el) => {
// //   sum += el;
// // });
// // console.log(sum);
// const newArr = arr.forEach((el) => {
//   sum += el;
// });

// console.log(sum);
// console.log(newArr);
// // custom map
// const customMap = (arr, fn) => {
//   const result = [];
//   arr.forEach((el) => {
//     const transformElement = fn(el);
//     result.push(transformElement);
//   });
//   // for (let i = 0; i < arr.length; i++) {
//   //   const transformElement = fn(arr[i]);
//   //   result.push(transformElement);
//   // }
//   return result;
// };

// console.log(customMap([1, 2, 3, 4], (el) => el * 2));
// console.log([1, 2, 3, 4].map((el) => el * 2));

// for (let i = 1; i <= 4; i++) {
//   var y = 5;

//   console.log(y);
// }

// function getX() {
//   return function () {
//     return y;
//   };
// }
// console.log(getX()());
// var double;

// function double(num) {
//   return num * 2;
// }

// console.log(typeof double); // Вывод: function

// let str = "qwerty werwer we33f wweer werwerwer";
// console.log(str.split(/\s+/));
// let x = 1;
// while (x <= 5) {
//   console.log("x =" + x); // we a expect 1,2,3,4,5
//   x += 1; // x = x + 1;
// }

// let x2 = 5;
// do {
//   console.log("x = " + x2); // expecting result is 5,4,3,2,1
//   x2 = x2 - 1; // x -= 1;
// } while (x2 >= 1);

// function testWhile(a) {
//   var x = 0;
//   let y = 0;
//   do {
//     if (y % 2 !== 0) {
//       x += y; // x = x + y;
//     }
//     y++;
//   } while (y <= a);

//   return x;
// }

// console.log(testWhile(7));

// for (i = 1; i < 10; i = i + 1) {
//   if (i == 5) {
//     break;
//   }
//   console.log("i =" + i);
// }

// for (i = 1; i < 10; i = i + 1) {
//   if (i == 5) {
//     continue;
//   }
//   console.log("i =" + i);
// }

// PRACTICE RECURSION
// function my_function(n) {
//   if (n <= 1) return 1;
//   return my_function(n - 1) + " " + n;
// }
// console.log(my_function(111));

// ////////////////////////////// OBJECT
// ////////////////////////////// OBJECT
// ////////////////////////////// OBJECT
// ////////////////////////////// OBJECT
// ////////////////////////////// OBJECT

// var person = {}; // Declare object person
// person.sayAge = function (n) {
//   // Declare the sayAge method for the person
//   console.log("Person is" + n + "years old"); // Body of the sayAge method - text output
// };
// person.sayAge(16);
// ///////////////////////////////
// var person = {
//   name: "Ivan",
//   age: 25,
//   hiredYear: 2017,
// };

// person.sayName = function () {
//   console.log("My name is" + " " + this.name);
// };
// person.sayName();

// /////////////////////////////////////////// for in !!!!!

// const person1 = {
//   name: "Alex",
//   age: 233,
//   hiredYear: 1994,
// };

// const person = {
//   name: "Ivan",
//   age: 25,
//   hiredYear: 2017,
// };

// person.sayAll = function () {
//   for (let i in this) {
//     ///////// for in example
//     console.log(i + " is " + this[i]);
//   }
// };

// console.log(person.sayAll.call(person1));

// person.sayAll();

// ///////////////////////////////////////////

// var cat = "Cat";
// console.log(cat.charAt(1));

// var cat = "Cat";
// cat = cat.charAt(2) + cat.charAt(1) + cat.charAt(0);
// console.log(cat);

// const date = new Date(2012, 1, 20, 4, 12);
// console.log(date);

// let date = new Date(2012, 0, 3); // 3 января 2012 года

// function getWeekDay(date) {
//   // const weeksDays = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];
//   return date.getDay();
// }
// console.log(getWeekDay(date));

// //////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////

// let date = new Date(2015, 0, 2);

// function getDateAgo(date, num) {
//   let curentTime = date.getTime();
//   let spanTime = num * 24 * 60 * 60 * 1000;
//   let newTime = curentTime - spanTime;
//   return new Date(newTime).getDate();
// }

// console.log(getDateAgo(date, 365));

// //////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////

// function getLastDayOfMonth(year, month) {
//   const date = new Date(year, month + 1);
//   return date.getDate();
// }

// console.log(getLastDayOfMonth(2012, 1));
// ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// try {
//   for (let i = 0; i <= 5; i++) {
//     console.log(i);
//   }
// } catch (err) {
//   console.log(err);
// }
// console.log("End of the Script");

// //////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////

// let str = "abcdabcdabcdabcdwpekrpowekr";

// let result = str.match(/abcd/g);

// console.log(new RegExp(str));

// //////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////
// Course HEXLET JAVA SCRIPT ES6
// //////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////

// const reverse = (str) => {
//   let arr = [];
//   for (let i = str.length - 1, j = 0; i >= 0; i--, j++) arr[j] = str[i];
//   return arr.join("");
// };

// reverse("hello, world!");
// console.log(reverse("hello, world!"));

// function smallestDivisor(num) {

// if (num === 1) return 1;
// let divisor = 2;
// if (num % divisor === 0) {
//   return divisor;
// } else {

// }
// }

// const smallestDivisor = (num) => {
// if (num === 1) return 1;
// let divisor = 2;

// while (true) {
//   if (num % divisor === 0) {
//     return divisor;
//   } else {
//     divisor++;
//   }
// }
// };

// console.log(smallestDivisor(33));

// const smallestDivisor = (num, divisor) => {
//   if (num === 1) return 1;

//   if (num % divisor === 0) return divisor;

//   return smallestDivisor(num, divisor + 1);
// };

// console.log(smallestDivisor(17, 2));

// const smallestDivisor = (num) => {

// const smallestDivisor = (num, divisor) => {
//   if (num === 1) return 1;

//   if (num % divisor === 0) return divisor;

//   return smallestDivisor(num, divisor + 1);
// };

// };

// /////////////////////////////////

// const testScore = 10;
// const result = testScore < 10 ? "bad" : "good";
// console.log(result);

// /////////////////////////////////

// const func = (num) => {
//   if (num > 0) {
//     return num - 1;
//   }

//   return num + 1;
// };

// console.log(func(-2));

// /////////////////////////////////

// const finalGrade = (exam, projects) => {
//   if (exam > 90 || projects > 10) {
//     return 100;
//   } else if (exam > 75 && projects >= 5) {
//     return 90;
//   } else if (exam > 50 && projects >= 2) {
//     return 75;
//   } else {
//     return 0;
//   }
// };
// console.log(finalGrade(20, 2));

// /////////////////////////////////

// function my_function(n) {
//   if (n === 1) return 1;
//   return my_function(n - 1) + " " + n;
// }
// console.log(my_function(7));

// const answers = [];

// answers[0] = prompt('What is your name?', '');
// answers[1] = prompt('What is your surname?', '');
// answers[2] = prompt('How old are you ?', '');

// console.log(typeof answers);

// let result = '';

// for (let i = 0; i <= 7; i++) {
//   console.log(`First level: ${i}`);
//   for (let j = 0; j < i; j++) {
//     console.log(`Second level: ${j}`);
//     result += '*';
//   }
//   result += '\n';
// }

// console.log(result);

// first: for (let i = 0; i < 3; i++) {
//   console.log(`First level: ${i}`);
//   for (let j = 0; j < 3; j++) {
//     console.log(`Second level: ${j}`);
//     for (let k = 0; k < 3; k++) {
//       if (k === 2) continue first;
//       console.log(`Third level: ${k}`);
//     }
//   }
// }

///////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////Cycle exercise/////////////////////////////////////////
//////////////////////////////Cycle exercise/////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////

//  CYCLE EXERCISE
// 1 .При помощи цикла выведите числа от 5 до 10 в консоль. 5 и 10 включительно. Цикл можно использовать любой

// function firstTask() {
//   for (let i = 5; i <= 10; i++) {
//     console.log(i);
//   }
// }
// firstTask();

///////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////Cycle exercise/////////////////////////////////////////

// 2. При помощи цикла for вывести числа от 20 до 10 в консоль. В обратном порядке (20, 19, 18...). Когда цикл дойдет до числа 13 - остановить весь цикл.

// function secondTask() {
//   for (let i = 20; i >= 10; i--) {
//     if (i === 13) {
//       break;
//     }
//     console.log(i);
//   }
// }
// secondTask();

///////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////Cycle exercise/////////////////////////////////////////

// 3. При помощи цикла for выведите чётные числа от 2 до 10 включительно.

// function thirdTask() {
//   for (let i = 2; i <= 10; i++) {
//     if (i % 2 === 0) {
//       console.log(i);
//     }
//   }
// }
// thirdTask();

///////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////Cycle exercise/////////////////////////////////////////

// 4. Перепишите цикл  for на вариант с while. Результат должен остаться точно таким же. Не создайте бесконечный цикл! Иначе браузер может зависнуть.

// Цикл, который нужно переписать:
// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

// function fourthTask() {
//   let i = 2;

//   while (i <= 16) {
//     if (i % 2 === 0) {
//       i++;
//       continue;
//     } else {
//       console.log(i);
//     }
//     i++;
//   }
// }
// fourthTask();

///////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////Cycle exercise/////////////////////////////////////////

// 5. Заполните массив цифрами от 5 до 10 включительно. Помните, что элементы массива можно сформировать так же, как и обращаться к ним: arr[0]

// function fifthTask() {
//   const arrayOfNumbers = [];

//   for (let i = 5; i <= 10; i++) {
//     arrayOfNumbers[i - 5] = i;
//   }
//   console.log(arrayOfNumbers);
//   return arrayOfNumbers;
// }
// fifthTask();

///////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////Cycle exercise/////////////////////////////////////////

// 6. Заполните новый массив (result) числами из старого (arr). Количество элементов в массиве можно получить как arr.length, а к элементам обращаемся все так же: arr[0], arr[1] и тд.
// Должен получиться точно такой же массив

// function sixthTask() {
//   const arr = [3, 5, 8, 16, 20, 23, 50];
//   const result = [];
//   for (let i = 0; i < arr.length; i++) {
//     result[i] = arr[i];
//   }
//   console.log(result);
//   return result;
// }

// sixthTask();

///////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////Cycle exercise/////////////////////////////////////////

// 7. Измените данный массив так, чтобы все числа были увеличены в 2 раза, а если попадается строка строка - то к ней было добавлено " - done".
// Для определения типа данных используйте typeof();
// Должно получиться: [ 10, 20, 'Shopping - done', 40, 'Homework - done' ]

// function seventhTask() {
//   const data = [10, 20, 'Shopping - done', 40, 'Homework - done'];
//   for (let i = 0; i < data.length; i++) {
//     if (typeof data[i] === 'number') {
//       data[i] = data[i] * 2; // data[i] *= 2;
//     } else if (typeof data[i] === 'string') {
//       data[i] = `${data[i]} - done`;
//     }
//   }
//   console.log(data);
//   return data;
// }
// seventhTask();

// 8. Разверните массив data наоборот при помощи цикла и запишите данные в массив result.
// Должно получиться: [ 'Homework', 20, 'Shopping', 10, 5 ]

// function eighthTask() {
//   const data = [5, 10, 'Shopping', 20, 'Homework'];
//   const result = [];

//   for (let i = 1; i <= data.length; i++) {
//     result[i - 1] = data[data.length - i];
//   }
//   console.log(result);
//   return result;
// }

// eighthTask();

///////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////Cycle exercise/////////////////////////////////////////

// 9. необходимо написать код, который при помощи звездочек (*) в консоли нарисует вот такую фигуру:

//      *
//     ***
//    *****
//   *******
//  *********
// ***********
// (Подсказка: в конце фигуры есть перенос строки \n, который тоже учитывается в тестах. В КОНЦЕ КАЖДОЙ СТРОКИ НЕТ ПРОБЕЛОВ, ТОЛЬКО ПЕРЕНОС)

// const lines = 5;
// let result = '';

// for (let i = 0; i <= lines; i++) {
//   for (let j = 0; j < lines - i; j++) {
//     result += ' ';
//   }
//   for (let j = 0; j < 2 * i + 1; j++) {
//     result += '*';
//   }
//   result += '\n';
// }
// console.log(result);

///////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////FUNCTION EXERCISE/////////////////////////////////////////
//////////////////////////////FUNCTION EXERCISE/////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
// let num = 20;

// function showFirstMessage(text) {
//   console.log(text);

//   console.log(num);
// }

// showFirstMessage('Hello Alex');
// console.log(num);
////////////////
// FUNCTION DECLARATION
// function all0(){

// }
// FUNCTION EXPRESION
// const all1 = function all2 () {}

// //function declaration
// function ret() {
//   let num = 50;
//   return num;
// }

// //function expression
// const anotherNum = function ret() {
//   console.log(anotherNum);
// };

// //ARROW FUNCTIO !!!!

// const calc = (a, b) => a + b;

// const usdCurr = 28;
// const eurCurr = 32;
// const discount = 0.9;

// function convert(amount, curr) {
//   console.log(curr * amount);
//   return curr * amount;
// }

// function promotion(result) {
//   console.log(result * discount);
// }
// const res = convert(500, usdCurr);
// promotion(res);
// convert(500, eurCurr);
// function test() {
//   for (let i = 0; i < 5; i++) {
//     console.log(i);
//     if (i === 3) return;
//   }
//   console.log('Done');
// }
// test();

// function doNothing() {}
// console.log(doNothing() === undefined);

///////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////FUNCTION EXERCISE/////////////////////////////////////////
//////////////////////////////FUNCTION EXERCISE/////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////

// 1. 1) Создайте функцию, которая будет на вход принимать 1 аргумент с именем человека и возвращать строку. Пример: вызов функции sayHello('Антон') возвращает строку "Привет, Антон!". В решении вызывать функцию не нужно, программа сделает это за вас.

// P.S. возвращать - это использовать ключевое слово return.
//
// // P.S.S. Это классическая функция-модификатор, которых мы дальше по курсу будем создавать еще много в разных видах.

// function sayHello(name) {
//   return `Привет, ${name}!`;
// }

// console.log(sayHello('Alex'));

// // 2. Создайте функцию, которая принимает в себя 1 аргумент в виде целого числа и возвращает массив из трех чисел: одно на 1 меньше, сам аргумент, и число на 1 больше.

// // Пример: вызов функции returnNeighboringNumbers(5) возвращает массив в виде [4, 5, 6].

// function returnNeighboringNumbers(num) {
//   return [num - 1, num, num + 1];
// }

// console.log(returnNeighboringNumbers(10));

// 3. Создайте функцию, которая будет принимать в себя 2 аргумента, оба числа. Первое число - это база, второе число - это сколько раз нужно будет повторить это число в прогрессии. (Смотри пример ниже). Функция должна возвращать строку (или число в особых случаях, о которых ниже), где эти числа идут по порядку, разделенные тремя дефисами "---". После последнего числа их не должно быть.

// Если второй аргумент не является числом, равен или меньше нуля - то возвращать просто первый аргумент. (Проверяем через оператор typeof)

// Примеры:

// Вызов функции getMathResult(5, 3) даст ответ 5---10---15

// Вызов функции getMathResult(3, 10) даст ответ 3---6---9---12---15---18---21---24---27---30

// Вызов функции getMathResult(10, 5) даст ответ 10---20---30---40---50

// Вызов функции getMathResult(10, '5') даст ответ 10

// Вызов функции getMathResult(10, 0) даст ответ 10

// Вызов функции getMathResult(20, -5) даст ответ 20

// Эта задача уже ближе к реальности, когда вам нужно учитывать и тип данных у аргументов, проверять их и продумывать логику работы внутри. Обратите внимание на прогрессию, она рассчитывается по простой формуле умножения. Если первый аргумент 5, а второй 3, то число повторяется 3 раза, каждый раз увеличиваясь на само себя. Это базовая математика, которая и нужна для работы в 95% случае на фронтенде.

// Да, задача сложнее, но она просто объединяет все то, что мы уже учили.

// function getMathResult(num, times) {
//   if (typeof times !== 'number' || times <= 0) {
//     return num;
//   }

//   let str = '';

//   for (let i = 1; i <= times; i++) {
//     if (i === times) {
//       str += `${num * i}`;
//     } else {
//       str += `${num * i}---`;
//     }
//   }

//   return str;
// }

// getMathResult(10, 5);

// const factorial = (n) => {
//   const iter = (counter, acc) => {
//     if (counter === 1) {
//       return acc;
//     }
//     return iter(counter - 1, counter * acc);
//   };
//   return iter(n, 1);
// };
// console.log(factorial(5, 1));

///////////////////////////////////////////////////////

// factorialWhile = (n) => {
//   let counter = 1;
//   let result = 1;

//   while (counter <= n) {
//     result = result * counter;
//     counter = counter + 1;
//   }
//   return result;
// };

// console.log(factorialWhile(3));

// const smallestDivisor = (num) => {
//   if (num === 1) return 1;
//   let divisor = 2;

//   while (true) {
//     if (num <= 1) {
//       return NaN;
//     }
//     if (num % divisor === 0) {
//       return divisor;
//     } else {
//       divisor++;
//     }
//   }
// };

// console.log(smallestDivisor(-1));

// const smallestDivisor = (num) => {
//   if (num === 1) return 1;
//   if (num < 1) return NaN;

//   let divisor = 2;

//   while (true) {
//     if (num % divisor === 0) {
//       return divisor;
//     } else {
//       divisor++;
//     }
//   }
// };

// console.log(smallestDivisor(4));

// const skip = (str) => {
//   let i = 0;
//   let result = '';

//   while (i < str.length) {
//     result = result + str[i];
//     i = i + 2;
//   }
//   return result;
// };

// console.log(skip('California'));

// reverse = (str) => {
//   let i = str.length - 1;
//   let result = '';

//   while (i >= 0) {
//     result = result + str[i];
//     i--;
//   }
//   return result;
// };
// console.log(reverse('home'));

// revers = (str) => {
//   let result = '';

//   for (i = str.length - 1; i >= 0; i--) {
//     result = result + str[i];
//   }
//   return result;
// };

// console.log(revers('abra kadab ra'));

//////////////////////////////////////////////

// isPrime = (num) => {
//   if (num <= 1) return false;

//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) return false;
//   }
//   return true;
// };

// console.log(isPrime(-3));

// function getMathResult(num, times) {
//   if (typeof times !== 'number' && times <= 0) {
//     return num;
//   }
//   let str = '';

//   for (let i = 1; i <= times; i++) {
//     if (i === times) {
//       str += i * num;
//     } else {
//       str += `${num * i}---`;
//     }
//   }
//   return str;
// }

// function ucFirst(str) {
//   if (!str) return str;

//   return str[0].toUpperCase() + str.slice(1);
// }

// console.log(ucFirst('hello wolrd'));

// function checkSpam(str) {
//   let lowerStr = str.toLowerCase();

//   return lowerStr.includes('viagra') || lowerStr.includes('xxx');
// }

// function truncate(str, maxlength) {
//   return str.length > maxlength ? str.slice(0, maxlength - 1) + '...' : str;
// }

// console.log(truncate('werlwer wer werwererw er wer', 10));

// function extractCurrencyValue(str) {
//   return +str.slice(1);
// }
// console.log(extractCurrencyValue('$120') === 120);

/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
/////////////////////////STR ///////////////////////////////////////
/////////////////////////////////////////////////////////////////////////

// let str = 'hello';
// console.log(str);
// let a = str[0].toUpperCase() + str.substring();
// console.log(a);

// function solution(str) {
//   let arr = str.split(' ');
//   console.log(arr);
//   let answer = '';

//   for (let i = 0; i < arr.length; i++) {
//     answer += arr[i][0].toUpperCase(str) + arr[i].substr(1) + ' ';
//   }

//   return answer;
// }
// console.log(solution('hello, , , , world!'));

// что будет показано: "John" или "Pete"?

//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////EXERCISE//////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////

// 1) Создайте функцию, которая будет вычислять объем и площадь полной поверхности куба (тоже базовая математика, иногда используется в создании анимаций). Эта функция принимает в себя целое число со значением длины ребра куба. Ответ выведите в формате строки, который изображен в примерах.

// Если в функцию попал неправильный аргумент или вычислить значения невозможно - вернуть строку "При вычислении произошла ошибка"

// НЕ ИСПОЛЬЗУЙТЕ ОПЕРАТОР СТЕПЕНИ ** - в онлайн среде браузера он не работает и тесты будут ломаться. Это из-за того, что этот оператор из более нового стандарта, чем тут доступен.

// Примеры:

// calculateVolumeAndArea(5)  => 'Объем куба: 125, площадь всей поверхности: 150'

// calculateVolumeAndArea(15)  => 'Объем куба: 3375, площадь всей поверхности: 1350'

// calculateVolumeAndArea(15.5)  => 'При вычислении произошла ошибка'

// calculateVolumeAndArea('15')  => 'При вычислении произошла ошибка'

// calculateVolumeAndArea(-15)  => 'При вычислении произошла ошибка'

// 2) Постепенно переходим к более реалистичным задачам :) Вы обнаружите, что там используется все тоже самое.

// Напишите функцию, которая будет определять номер купе по переданному ей номеру места. Наглядно:

// Функция принимает только целое число от 1 до 36.

// Если переданный аргумент не число, отрицательное или дробное - возвращается сообщение:

// "Ошибка. Проверьте правильность введенного номера места"

// Если число 0 или больше 36, то сообщение: "Таких мест в вагоне не существует"

// Пример:

// getCoupeNumber(33)  => 9

// getCoupeNumber(7)  => 2

// getCoupeNumber(300)  => "Таких мест в вагоне не существует"

// getCoupeNumber(0)  => "Таких мест в вагоне не существует"

// getCoupeNumber(7.7)  => "Ошибка. Проверьте правильность введенного номера места"

// getCoupeNumber(-10)  => "Ошибка. Проверьте правильность введенного номера места"

// getCoupeNumber('Hello')  => "Ошибка. Проверьте правильность введенного номера места"

// function getCoupeNumber(seatNumber) {
//   if (setInterval === 0 || seatNumber > 36) {
//     return 'Таких мест в вагоне не существует';
//   }
//   if (
//     typeof seatNumber !== 'number' ||
//     seatNumber < 0 ||
//     !Number.isInteger(seatNumber)
//   ) {
//     return 'Ошибка. Проверьте правильность введенного номера места';
//   }
//   return Math.ceil(seatNumber / 4);
// }

// console.log(getCoupeNumber(69));

// function calculateVolumeAndArea(length) {
//   if (typeof length !== 'number' || length < 0 || !Number.isInteger(length)) {
//     return 'При вычислении произошла ошибка';
//   }

//   let volume = 0,
//     area = 0;

//   volume = length * length * length;
//   // length ** 3 - это тоже самое, что и выше или варианты через цикл.
//   // ** - это оператор степени, напоминаю. Но онлайн редактор его не принимает =/
//   area = 6 * (length * length);

//   return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
// }

//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////CODING EXERCISE 8 //////////////////////////////////////
//////////////////////////////CODING EXERCISE 8 //////////////////////////////////////
//////////////////////////////CODING EXERCISE 8 //////////////////////////////////////
//////////////////////////////CODING EXERCISE 8 //////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////

// 1) Создайте функцию, которая принимает в себя целое число минут и возвращает время в нужном формате строки. (Смотри пример). Обратите внимание на окончание слова "час" - оно меняется в зависимости от цифры. Если вместо аргумента приходит не число, дробное или отрицательное число - функция возвращает строку "Ошибка, проверьте данные" Пример:

// getTimeFromMinutes(150) => "Это 2 часа и 30 минут"

// getTimeFromMinutes(50) => "Это 0 часов и 50 минут"

// getTimeFromMinutes(0) => "Это 0 часов и 0 минут"

// getTimeFromMinutes(-150) => "Ошибка, проверьте данные"

// function getTimeFromMinutes(minutesTotal) {
//   if (
//     typeof minutesTotal !== 'number' ||
//     minutesTotal < 0 ||
//     !Number.isInteger(minutesTotal)
//   ) {
//     return 'Ошибка, проверьте данные';
//   }

//   const hours = Math.floor(minutesTotal / 60);
//   const minutes = minutesTotal % 60;

//   let hoursStr = '';

//   switch (hours) {
//     case 0:
//       hoursStr = 'часов';
//       break;
//     case 1:
//       hoursStr = 'час';
//       break;
//     case 2:
//     case 3:
//     case 4:
//       hoursStr = 'часа';
//       break;
//     default:
//       hoursStr = 'часов';
//   }

//   return `Это ${hours} ${hoursStr} и ${minutes} минут`;
// }

// console.log(getTimeFromMinutes('rwerwer'));

/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////

// 2) Напишите функцию, которая принимает в себя 4 числа и возвращает самое большее из них. Если один из аргументов не является числом или их меньше 4 - возвращается 0. Дробные числа разрешены.

// Пример:

// findMaxNumber(1, 5, 6.6, 11); =>  11

// findMaxNumber(1, 5, '6', '10');  =>  0

// function findMaxNumber(a, b, c, d) {
//   if (
//     typeof a !== 'number' ||
//     typeof b !== 'number' ||
//     typeof c !== 'number' ||
//     typeof d !== 'number'
//   ) {
//     return 0;
//   } else {
//     return Math.max(a, b, c, d);
//   }
// }

// console.log(findMaxNumber(1, 5, '66', '10'));
// console.log(findMaxNumber(1, 5, 3.9, 8.5));

/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////

// Создайте функцию, которая будет принимать в себя один аргумент-целое положительное число. Она должна возвращать строку, в которой будут через пробел выведены числа Фибоначчи. Причем, их количество должно быть равно переданному аргументу.

// Если переданный аргумент не число - вернуть пустую строку. Решать без применения рекурсии.

// Пример:

// fib(4) => ''0 1 1 2"

// fib(7) => ''0 1 1 2 3 5 8"

// fib('7') => ''"

// fib(1) => "0"

// fib(0) => ''"

// function fib(num) {
//   if (typeof num !== 'number' || num <= 0 || !Number.isInteger(num)) {
//     return '';
//   }

//   let result = '';
//   let first = 0;
//   let second = 1;

//   for (let i = 0; i < num; i++) {
//     if (i + 1 === num) {
//       result += `${first}`;
//       // Без пробела в конце
//     } else {
//       result += `${first} `;
//     }

//     let third = first + second;
//     first = second;
//     second = third;
//   }

//   return result;
// }

// console.log(fib(7));

//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////CALL BACK FUNCTION!//////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////

// function first() {
//   //Do something
//   setTimeout(function () {
//     console.log(1);
//   }, 500);
// }

// function second() {
//   console.log(2);
// }

// first();
// second();

// function learnJS(lang, callback) {
//   console.log(`Iam lerning: ${lang}`);
//   callback();
// }

// function done() {
//   console.log('Iam finishing this leason!');
// }

// learnJS('JavaScript', done);

// function learnJS(lang, callback) {
//   console.log(`Я учу: ${lang}`);
//   callback();
// }

// function done() {
//   console.log('Я прошел этот урок');
// }

// learnJS('JavaScript', done);

//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////OBJECTS!//////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////

// const options = {
//   name: 'test',
//   width: 1024,
//   height: 1024,
//   colors: {
//     border: 'black',
//     bg: 'red',
//   },
//   makeTest: function () {
//     console.log('test');
//   },
// };

// options.makeTest();
// const { border, bg } = options.colors;
// console.log(border);
// console.log(options, Object.keys(options).length);

// delete options.name;

// console.log(options.name);

// let counter = 0;

// for (let key in options) {
//   if (typeof options[key] === 'object') {
//     for (let i in options[key]) {
//       console.log(`Key /${i}/ have property  /${options[key][i]}/`);
//       counter++;
//     }
//   } else {
//     console.log(`Key /${key}/ have property  /${options[key]}/`);
//     counter++;
//   }
// }

// console.log(counter);

// const rabbit = {};

// rabbit.run = function (n) {
//   console.log(`Rabbit was running ${n} meters`);
// };

// rabbit.run(5);
// console.log(rabbit.run);

// function getNumber() {
//   return 10;
// }

// module.exports = { getNumber };
// sumOfSquares = (num1, num2) => {
//   return (sum = num1 * num1 + num2 * num2);
// };

// function first() {
//   // Do something
//   setTimeout(function () {
//     console.log(1);
//   }, 500);
// }

// function second() {
//   console.log(2);
// }

// first();
// second();

// const user = {
//   name: 'Aleks',
//   surname: 'Prybysh',

//   get fullName() {
//     return `${this.name} ${this.surname}`;
//   },

//   set fullName(value) {
//     [this.name, this.surname] = value.split(' ');
//   },
//   width: 1024,
//   height: 1024,
//   colors: {
//     border: 'black',
//     bg: 'red',
//   },
//   makeTest: function () {
//     console.log('Test message');
//   },
// };

// user.fullName = 'Viktoriia Prybysh';

// let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
// alert(JSON.stringify(descriptor, null, 2));

// console.log(user.fullName);
// options.makeTest();
// console.log(Object.keys(user).length);

// console.log(options.colors.bg);

// delete options.name;

// console.log(options);

// let counter = 0;
// for (let key in options) {
//   if (typeof options[key] === 'object') {
//     for (let i in options[key]) {
//       console.log(`Properties ${i} have value ${options[key][i]}`);
//     }
//   } else {
//     console.log(`Properties ${key} have value ${options[key]}`);
//     counter++;
//   }
// }

// console.log(counter);

