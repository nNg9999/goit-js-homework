'use strict';

const max = 10;

for (let i = 0; i < max; i += 1) {
  console.log(`${max} % ${i} = `, max % i);
}

let userChoice;

while (true) {
  userChoice = prompt(
    'Выберите вариант доставки: 1 - самовывоз, 2 - курьер, 3 - почта',
  );

  if (userChoice === null) {
    break;
  }

  userChoice = Number(userChoice);

  const isValid = userChoice >= 1 && userChoice <= 3;

  if (isValid) {
    break;
  }

  console.log('Невалидный ввод, попробуйте еще раз!');
}

switch (userChoice) {
  case 1:
    alert('Самовывоз!');
    break;

  case 2:
    alert('Курьер!');
    break;

  case 3:
    alert('Почта!');
    break;

  default:
    alert('Вам перезвонит менеджер!');
}
