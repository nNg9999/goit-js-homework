'use strict';

console.log('Задание 2');
/**
 * В HTML есть пустой список ul#ingredients.
 * В JS есть массив строк.
 * Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
 * после чего вставит все li за одну операцию в список ul.ingredients.
 * Для создания DOM-узлов используй document.createElement().
 */
const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listIngredients = document.querySelector(`#ingredients`);

// const addListIngredients = arr => {
//   let res = arr.map(ingredient => {
//     const li = document.createElement('li');
//     li.textContent = ingredient;
//     return li;
//   });
//   return res;
// };
// listIngredients.append(...addListIngredients(ingredients));

const addListIngredients = ingredients.map(ingredient => {
  const li = document.createElement('li');
  li.textContent = ingredient;
  return li;
});

listIngredients.append(...addListIngredients);
console.log('END Задание 2');
