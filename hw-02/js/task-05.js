'use strict';

console.log('Задание 5');
/*
Напиши функцию checkForSpam(message), принимающую 1 параметр message - строку. Функция проверяет ее на содержание слов spam и sale. Если нашли зарещенное слово то функция возвращает true, если запрещенных слов нет функция возвращает false. Слова в строке могут быть в произвольном регистре.
*/

// eslint-disable-next-line func-names
const checkForSpam = function(message) {
  const toLowerCaseMessage = message.toLowerCase();

  if (
    toLowerCaseMessage.includes('spam') ||
    toLowerCaseMessage.includes('sale')
  ) {
    return true;
  }

  return false;
};

// От Геннадия
// const checkforspam = str => {
//   const source = str.tolowercase();
//   return source.includes('spam') || source.includes('sale');
// };

// function setSpamWords(...spamWords) {
//   return function checkInclude(s) {
//     const arg = [...spamWords];

//     for (let i = 0; i < arg.length; i += 1) {
//       if (s.includes(arg[i])) return true;
//     }
//     return false;
//   };
// }

// const checkForSpam = setSpamWords('spam', 'sale');

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
console.log('Задание 5 END');
