'use srtrict';

console.log('Задание 6');
/*  
Задание 6
Напиши скрипт со следующим функционалом:

При загрузке страницы пользователю предлагается в prompt ввести число. Ввод сохраняется в переменную input и добавляется в массив чисел numbers.
Операция ввода числа пользователем и сохранение в массив продолжается до тех пор, пока пользователь не нажмет Cancel в prompt.
После того как пользователь прекратил ввод нажав Cancel, если массив не пустой, необходимо посчитать сумму всех элементов массива и записать ее в переменную total. Используй цикл for или for...of. После чего в консоль выведи строку 'Общая сумма чисел равна [сумма]'.
🔔 Делать проверку того, что пользователь ввел именно число, а не произвольный набор символов, не обязательно. Если хочешь, в случае некорректного ввода, показывай alert с текстом 'Было введено не число, попробуйте еще раз', при этом результат prompt записывать в массив чисел не нужно, после чего снова пользователю предлагается ввести число в prompt.
*/

// const PRINT = 'Введите число';
// let message;
// let inputUser;
// let input;
// let total = 0;
// const numbers = [];

// do {
//   inputUser = prompt(PRINT);
//   if (inputUser === null) {
//     for (let i = 0; i < numbers.length; i += 1) {
//       total += numbers[i];
//     }
//     message = `Общая сума чисел равна ${total}`;
//     alert(message);
//     break;
//   }
//   input = Number.parseInt(inputUser, 10);
//   if (input === Number(input)) {
//     numbers.push(input);
//   } else {
//     message = 'Было введено не число, попробуйте еще раз';
//     alert(message);
//   }
// } while (inputUser !== null);

// От Геннадия

const YOU_NUMBER = 'You number';
const NO_NUMBER = 'Было введено не число, попробуйте еще раз';
let userInput;
let total = 0;
const numbers = [];

while (userInput !== null) {
  userInput = prompt(YOU_NUMBER, 0);
  if (userInput === null) break;
  const userNumber = +userInput;
  if (Number.isNaN(userNumber)) {
    alert(NO_NUMBER);
  } else {
    numbers.push(userNumber);
  }
}

if (numbers.length > 0) {
  for (let i = 0; i < numbers.length; i += 1) {
    total += numbers[i];
  }
}
const message = `Общая сумма чисел равна ${total}`;
alert(message);

console.log('Задание 6 END');
