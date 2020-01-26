'use strict';

console.log('Задание 5');
/*
Задание 5
Пользователь может оформить доставку товара к себе в страну, указав ее при посещении 
страницы в prompt.Учти, пользователь может ввести имя страны не только буквами нижнего
регистра, а к примеру 'кИтАЙ'.

Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну.
Обязательно используй switch.Формат сообщения: 
'Доставка в [страна] будет стоить [цена] кредитов'.

Но доставка есть не везде, если указанной страны нет в списке, то выводи в 
alert сообщение 'В вашей стране доставка не доступна'.

Ниже приведен список стран и стоимость доставки.

   - Китай - 100 кредитов
   - Чили - 250 кредитов
   - Австралия - 170 кредитов
   - Ямайка - 120 кредитов
   - Индия - 80 кредитов
*/

const userChoice;
const userChoiceLC;
let message;
const China = 'Китай';
const Chile = 'Чили';
const Australia = 'Австралия';
const Jamaica = 'Ямайка';
const India = 'Индия';

const priceChina = 100;
const priceChile = 250;
const priceAustralia = 170;
const priceJamaica = 120;
const priceIndia = 80;

userChoice = prompt('Напишыте страну доставки товара: Китай Чили Австралия Индия Ямайка');
userChoiceLC = userChoice.toLowerCase(userChoice);

switch (userChoiceLC) {
  case 'китай':
    message = `Доставка в ${China} будет стоить ${priceChina} кредитов`;
    break;

  case 'чили':
    message = `Доставка в ${Chile} будет стоить ${priceChile} кредитов`;
    break;

  case 'австралия':
    message = `Доставка в ${Australia} будет стоить ${priceAustralia} кредитов`;
    break;

  case 'ямайка':
    message = `Доставка в ${Jamaica} будет стоить ${priceJamaica} кредитов`;
    break;

  case 'индия':
    message = `Доставка в ${India} будет стоить ${priceIndia} кредитов`;
    break;

  default:
    message = 'В вашей стране доставка не доступна';
    break;
}

alert(message);

console.log('Задание 5 END');