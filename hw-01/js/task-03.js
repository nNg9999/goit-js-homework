'use strict';

console.log('Задание 3');
/*
Задание 3
Напиши скрипт имитирующий авторизацию администратора в панели управления.

Есть переменная message в которую будет записано сообщение о результате.
При загрузке страницы у посетителя запрашивается пароль через prompt:

  - Если нажали Cancel, записать в message строку 'Отменено пользователем!'
  - В протовном случае, если введен пароль который совпадает со значением константы 
    ADMIN_PASSWORD, записать в message строку 'Добро пожаловать!'
  - В противном случае, то есть если ни одно из предыдущих условий не выполнилось, 
    записать в message строку 'Доступ запрещен, неверный пароль!'
После всех проверок вывести в alert значение переменной message.

const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
*/

const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
let userChoice;

userChoice = prompt('Введите пароль:');

if (userChoice === ADMIN_PASSWORD) {
  message = 'Добро пожаловать!';
} else if (userChoice === null) {
  message = 'Отменено пользователем!';
} else {
  message = 'Доступ запрещен, неверный пароль!';
}
alert(message);

console.log('Задание 3 END');
