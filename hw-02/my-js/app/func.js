'use strict';

// обявления функцыонального выражения
// eslint-disable-next-line func-names
// const add = function(x, y) {
//   const sum = x + y;
//   console.log('Вызов функции add!');
//   return sum;
// };

// const x = add(2, 3);

// console.log('Результат 2+3:', add(2, 3));
// =============================================

// Фугкция нахождения самого длинного слова в строке

// const str = 'Анггнгагнанг рпгшпгрш ршнп';

// const findLongesWord = function(str) {
//   const words = str.split(' ');
//   let longestWord = words[0];

//   for (const word of words) {
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   }
//   return longestWord;
// };
// console.log(findLongesWord('GHbdtn  jkgfjhkfjfkg'));
// ============================================

/*
Аrray, includes своими руками
*/

// const includes = function(array, value) {
//   for (const item of array) {
//     if (item === value) {
//       return true;
//     }
//   }
//   return false;
// };

// console.log(includes([1, 2, 3], 4)); // false
// console.log(includes([1, 2, 3, 4, 5], 2)); // false
// console.log(includes(['mango', 'ajax', 'poly'], 'mango')); // true
// ====================================================

// const calculatePrice = function(string, costPerWord) {
//   const total = 0;
//   const words = string.split(' ');

//   for (const word of words) {
//     total += costPerWord;
//   }
//   return total;
// };

// const calculatePrice = function(string, costPerWord = 10) {
//   const words = string.split(' ');
//   const total = words.length * costPerWord;

//   return total;
// };

// const message = 'Point soic nayfjhfjhfjh';
// const price = calculatePrice(message, 20);
// console.log(price);

/*
Счетчик
*/

// const counter = function(initialvalue = 0, step = 1) {
// //qwe
// };
// counter();

/** Передача по ссылке */
// const double = function(array) {
//   console.log('array arg:', array);
//   for (let i = 0; i < array.length; i += 1) {
//     array[i] += array[i] * 2;
//   }
// };

// const numbers = [1, 2, 3, 4];

// double(numbers);
// console.log('numbers:', numbers);

/* Предикатные функции */
// а ето валидно? true/ false

// const isEqual = function(a, b) {
//   return a === b;
// };

// console.log(isEqual(5, 2));
// console.log(isEqual(5, 5));

// Array.isArray;
// Number.isNaN;
// Number.isInteger;

// ===============================

/* Rest */

const add = function(mult, ...arg) {
  let total = 0;
  for (let i = 0; i < arg.length; i += 1) {
    total += arg[i];
  }
  return total + mult;
};

console.log(add(5, 1, 2, 3));

// =======================================
