// const button = document.getElemenDyId('button1');

'use strict';

// const products = ['Apples', 12, 8];
// console.log(products);

// const a = [1, 2, 3];
// const b = [1, 2, 3];
// console.log(a === b); //fasle

// const a = 5;
// const b = a;
// console.log(a === b); //

// const message = 'Lorem ipsum dolor sit amet';
// console.log(message);
// const words = message.split(' ');
// console.log(words);

// const snakeCaseMessage = words.join('_');
// console.log(snakeCaseMessage);

// const indexOfApples = products.indexOf('Apples');
// console.log(indexOfApples);
// const isInProducts = products.includes('Apples');
// console.log(isInProducts);

// ==================================

// const users = ['Mango', 'Ajax', 'Poly'];
// const login = prompt('Введите логин!');

// const isRegistetred = users.includes(login);

// if (isRegistetred) {
//   console.log('Добро пожаловать!');
// } else {
//   console.log('Неверный логин!!');
// }
// =======================================

// const numbers = [1, 2, 3];

// number.push(4);
// number.push(5);
// number.push(6);
// numbers.push(4, 5, 6);

// numbers.pop(); // удаляет последний елемент
// numbers.pop();
// console.log(numbers);

// numbers.pop();

// console.log(numbers);
// shift()— удаляет элемент из начала массива и возвращает его(элемента) значение.
// unshift()— добавляет элемент в начало массива.
// ================================================

// slice(begin, end) - Копирует элементы от begin, до, но не ключая, end
const numbers = [1, 2, 3, 4, 5];
const copyNumbers = numbers.slice(1, 4); //
console.log(copyNumbers);

// =====================================================

// const cards = ['card-1', 'card-2', 'card-3', 'card-4'];
// cards.splice(0, 3);

// console.log(cards);
// cards.splice(1, 0, 'cards-5');
// console.log(cards);
// =====================================================

const cards = ['card-1', 'card-2', 'card-3', 'card-5', 'card-4'];

const index = cards.indexOf('card-5');
console.log(index); // находим индекс

const card = cards.splice(index, 1)[0]; // вырезаем и сохраняем
console.log(cards); // вставляем
cards.splice(1, 0, card);
console.log(cards);
