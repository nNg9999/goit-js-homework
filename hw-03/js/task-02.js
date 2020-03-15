'use strict';

console.log('Задание 2');
/*
Задание 2
Напиши функцию countProps(obj), считающую кол-во свойств в объекте. Функция возвращает число - количество свойств.
*/

// const countProps = obj => {
//   const keys = Object.keys(obj);
//   return keys.length;
// };
// От Гени
const countProps = obj => Object.keys(obj).length;
/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(countProps({})); // 0

console.log(countProps({ name: 'Mango', age: 2 })); // 2

console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3

console.log('Задание 2 END');
