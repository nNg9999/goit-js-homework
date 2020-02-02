'use srtrict';

console.log('Задание 6');
/*  
Задание 6
Напиши функцию calculateTotalPrice(allProdcuts, productName), которая получает массив объектов и имя продукта (значение свойства name). Возвращает общую стоимость продукта (цена * количество).
*/
const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

// eslint-disable-next-line func-names
const calculateTotalPrice = function(allProdcuts, productName) {
  let values;

  // eslint-disable-next-line no-restricted-syntax
  for (const product of allProdcuts) {
    const keys = Object.keys(product);
    // eslint-disable-next-line no-restricted-syntax
    for (const key of keys) {
      if (product[key] === productName) {
        values = product.price * product.quantity;
      }
    }
  }
  return values;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(calculateTotalPrice(products, 'Радар')); // 5200

console.log(calculateTotalPrice(products, 'Дроид')); // 2800

console.log('Задание 6 END');
