'use strict';

// цыкл с предусловием
// let value = 0;

// while (value < 10) {
//   console.log(value);
//   value += 1;
// }

// ======================

// let counter = 0;
// const products = ['apples', 'grapes', 'banane'];

// while (counter < products.length) {
//   console.log(products[counter]);
//   counter += 1;
// }
// console.log('after while');

// ==============================
// const counter = 0;

// безконечный цыкл такого не делать
// while (counter < 5) {
//   console.log(counter);
//   counter += 1;
// }
// ==============================

// let userInput;
// do {
//   userInput = prompt('давай вводи число 10!');
//   console.log(userInput);
//   // Выполняем до тех пор пока не равно тгдд и не равно 10
// } while (userInput !== null && Number(userInput) !== 10);

// Пишем условие ВЫПОЛНЕНИЯ

// ==================================
// если нужно изменять в цыкле тогда for
// const products = ['apples', 'grape', 'banana'];
// for (let i = 0; i < products.length; i += 1) {
//   console.log('i:', i);
//   console.log(`products[${i}] :`, products[i]);
// }
// если счетчин не нужен просто перебор тогда for of

// for (const product of products) {
//   console.log(product);
// }

// =========================================

// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// for (let i = 0; i < matrix.length; i += 1) {
//   console.group(`Iteration ${i}`);
//   console.log(`i:`, i);
//   console.log(`matrix[${i}]:`, matrix[i]);

//   for (let j = 0; j < matrix[i].length; j += 1) {
//     console.log(`j:`, j);
//     console.log(`matrix[${i}][${j}]:`, matrix[i][j]);
//   }
//   console.groupEnd(`Iteration ${i}`);
// }

// =========================================

// const message = 'May the force be with you';
// const words = message.split(' ');
// const longestWord = words[0];

// for (let i = 0; i < words.length; i += 1) {
//   console.log(`${i}`, i);
//   console.log(`words[${i}]`, words[i]);

// const currentwordlength = words[i].length;
// const longestWordLength = longestWord.length;

//   if (currentWordLength > longesWordLength) {
//     longesWord = words[i];
//   }
// }

// for (const word of words) {
//   if (word.length > longestWord.Length) {
//     longestWord = word;
//   }
// }

// console.log(words);
// console.log(longestWord);

// =======================

// const message = 'qq ww eeee rrr tttttt yy';
// const words = message.split(' ');
// const max = words.length - 1;
// const leftCount = 4;
// const rigthCount = 5;
// let target;

// for (let i = 0; i < max; i += 1) {
//   console.log(words[i]);
//   console.log(i);

//   const prevElLength = words[i - 1].length;
//   const nextElLength = words[i + 1].length;

//   // index=Idx
//   // Element = elem =el

//   if (prevElLength === leftCount && nextElLength === rigthCount) {
//     target = words[i];
//   }
// }

// console.log(words);
// console.log(target);

// ============================================

//
const clients = ['Mango', 'Poly', 'Ajax'];
const clientNameToFind = 'Poly';
let message;

for (let i = 0; i < clients.length; i += 1) {
  console.log('${i}', i);
  console.log('clients', clients[i]);
  console.log('clientNameToFind:', clientNameToFind);

  if (clients[i] === clientNameToFind) {
    message = 'Найден :)';
    break;
  }
  message = 'Не найден :(';
}

console.log(message);