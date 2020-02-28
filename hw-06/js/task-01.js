'use strict';

import users from './users.js';

console.log('Задание 1');
/**
 * Получить массив имен всех пользователей (поле name).
 */
const getUserNames = users => users.map(item => item.name);

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]
console.log('Задание 1 END');

console.log('Задание 2');
/**
 * Получить массив объектов пользователей по цвету глаз (поле eyeColor).
 */

const getUsersWithEyeColor = (users, color) =>
  users.filter(item => item.eyeColor === color);

console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]
console.log('Задание 2 END');

console.log('Задание 3');
/**
 * Получить массив имен пользователей по полу (поле gender).
 */
const getUsersWithGender = (users, gender) =>
  users.filter(item => item.gender === gender).map(item => item.name);
console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
console.log('Задание 3 END');

console.log('Задание 4');
/**
 * Получить массив только неактивных пользователей (поле isActive).
 */

const getInactiveUsers = users => users.filter(item => !item.isActive);

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]
console.log('Задание 4 END');

console.log('Задание 5');
/**
 * Получить пользоваля (не массив) по email (поле email, он уникальный).
 */

const getUserWithEmail = (users, email) =>
  users.find(item => item.email === email);

console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}
console.log('Задание 5 END');

console.log('Задание 6');
/**
 * Получить массив пользователей попадающих в возрастную категорию от min до max лет (поле age).
 */

const getUsersWithAge = (users, min, max) =>
  users.filter(item => item.age > min && item.age < max);

console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]
console.log('Задание 6 END');

console.log('Задание 7');
/**
 * Получить общую сумму баланса (поле balance) всех пользователей.
 */

const calculateTotalBalance = users =>
  users.reduce((total, item) => total + item.balance, 0);

console.log(calculateTotalBalance(users)); // 20916
console.log('Задание 7 END');

console.log('Задание 8');
/**
 * Массив имен всех пользователей у которых есть друг с указанным именем.
 */

const getUsersWithFriend = (users, friendName) => {
  return users
    .filter(user => user.friends.includes(friendName))
    .map(user => user.name);
};

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]
console.log('Задание 8 END');

console.log('Задание 9');
/**
 * Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)
 */

const getNamesSortedByFriendsCount = users =>
  users
    .sort((a, b) => a.friends.length - b.friends.length)
    .map(item => item.name);

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
console.log('Задание 9 END');
