'use strict';

console.log('Задание 3');
/*
Задание 3
Напиши фукцнию findLongestWord(string), которая принимает параметром произвольную строку(в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.

*/

// 1. Сделать из строки масив
// 2. Перебрать масив в цыкле
// Переменная для хранения самого длинного слова и делаем переопределение что самое длинное слово это первое
// на каждой итерации сравнить текущее и новое
// если новое больше текущего перезаписать

const findLongestWord = function (string) {

  const words = string.split(' ');
  let longestWord = words[0];

  for (let i = 0; i < words.length; i += 1) {
    // console.log(`${i}`, i);
    // console.log(`words[${i}]`, words[i]);

    const currentWordLength = words[i].length;
    const longestWordLength = longestWord.length;

    if (currentWordLength > longestWordLength) {
      longestWord = words[i];
    }
  }

  // for (const word of words) {
  //   if (word.length < longestWord.length) {
  //     longestWord = word;
  //   }
  // }
  return longestWord;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'

console.log('Задание 3 END');