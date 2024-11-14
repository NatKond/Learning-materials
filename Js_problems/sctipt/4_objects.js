document.write (`<p>1) Создайте объект city1, укажите у него свойства name (название города, строка) со значением «ГородN» и population (населенность города, число) со значением 10 млн.</p>`);

const city1 = {
    name: `ГородN`,
    population: 10e6
}

document.write (`<p>2) Создайте объект city2 через нотацию {name: "ГородM", population: 1e6}.</p>`);
const city2 = {
    name: `ГородM`,
    population: 1e6
}

document.write (`<p>3) Создайте у объектов city1 и city2 методы(функцию) getName(), которые вернут соответствующие названия городов.</p>`);

function getName() {return this.name}
city1.getName = getName;
city2.getName = getName;

document.write(`<p>Название первого города: ${city1.getName()}</p>`);
document.write(`<p>Название второго города: ${city2.getName()}</p>`);

document.write (`<p>4) У нас есть объект, в котором хранятся зарплаты нашей команды.</p>`);

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }
document.write (`<p>Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.
Если объект salaries пуст, то результат должен быть 0.</p>`);

document.write (`<p>5) Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.</p>`);

// Например:

// // до вызова функции
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// multiplyNumeric(menu);

// // после вызова функции
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };
// Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.
// P.S. Используйте typeof для проверки, что значение свойства числовое.

