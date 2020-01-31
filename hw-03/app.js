'use strict';

console.log('Lessons 04');

// // declaration
// function sum1(a, b) {
//   return a + b;
// }

// // eslint-disable-next-line func-names
// const sum2 = function(a, b) {
//   return a + b;
// };

// // стрілочна так сама як declaration
// const sum3 = (a, b) => {
//   return a + b;
// };
// console.log(sum1(2, 5));
// console.log(sum2(4, 3));
// console.log(sum3(2, 1));

// ============================

// function sum(a, b) {
//   console.log(a + b);
//   return;
//   true;
// }
// console.log(sum(2, 1));

// ===========================

// function more(a, b) {
//   const result = a > b;
//   return result;
// }

// function more(a, b) {
//   if (a > b) {
//     return true;
//   } else {
//     return false;
//   }
// }
// ==================================
// const more3 = (a, b) => a > b;

// console.log(`5 > 2 = ${more3(2, 1)}`);

// =============================

// function fn1(a, b) {
//   console.log(a, b);
// }

// fn1(1, 2, 3);

// =================
// ...rest
// function fn1(start, a,b,...rest) {
//   // const arr = Array.from(arguments);
//   let sum = start;
//   rest.forEach(elem => { // анонімна функція
//     sum += elem;
//   });
//   console.log(sum);
// }

// fn1(10, 1, 2, 3);

// ================================

/**
 * Return the sum of a and b
 * @param {number} a;
 *  @param {number} b
 */
// JSdoc синтаксис

// Math.random();
// ================================

// const a = 1;
// function fn1() {
//   const b = 2;
//   const a = 2;
//   function fn2() {
//     console.log(a);
//   }
//   fn2();
// }
// fn1();
// // console.log(b);

// ================================
// const fn1 = () => {};
// const fn2 = () => {};
// // export default fn1;
// export  fn1;
// export  fn2;

// ===========================

// const arr = [4, 2, 23, 4, 4, 5];
// let min = arr[0];
// let max = arr[1];
// for (let i = 0; i < arr.length; i += 1) {
//   if (arr[i] < min) {
//     min = arr[i];
//   }
// }

// arr.forEach(e => {
//   // min = e<min? e:min;
//   if (e < min) {
//     min = e;
//   }
// });
// console.log(min);

// arr.forEach(e => (min = e < min ? e : min));

// ===============================
// // min&max
// const minmax = arr => {
//   const min = arr[0];
//   const max = arr[0];

//   arr.forEach(e => {
//     min = e < min ? e : min;
//     max = e > max ? e : max;
//   });
//   // return [min, max];
//   return `Min=${min} Max=${max}`;
// };
// console.log(min);

// ======================

// const text = ' Привнтт шолпорлпорлп оакрк олвп олвпу олауа';
// console.log(text);
// const arr = text.split(' ');

// const newArray = [];
// arr.forEach(word => {
//   const wordArr = wodr.split();
//   const firstLetter = wordArr[0].toUpperCase();
//   const rest = word.slice(1).toLocaleLowerCase();

//   newArray.push(`${firstLetter}`);
// });
// console.log(newArray.join(''));

// ====================================

// sortyng

const arr = [1, 2, 13, 14, 25, 16]; // сортуэ символами
// arr.sort((a, b) => {
//   if (a < b) {
//     return -1;
//   }
//   if (a > b) {
//     return 1;
//   }
//   return 0;
// });
// console.log(arr);

// arr.sort()

// arr.sort((a, b) => a - b);
// console.log(arr);
// ==================================

// arr = [1, 4, 8, 20];
// const dilterRange = (arr, min, max) => {
//   const newArray = [];
//   arr.forEach(e => {
//     if (e >= min && e <= max) {
//       newArray.push(e);
//     }
//   });
//   return newArray;
// };
// let arr = [5, 3, 8, 1];

// ==================================
