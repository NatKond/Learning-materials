//Задача: Вывести приветсвие и возраст. Написать программу, которая запрашивает у пользователя его возраст (в годах) и выводит, сколько ему лет.
const userName = prompt ('Как вас зовут?');
let bithYear = Number (prompt ('Укажите ваш год рожденья'));
let userAge = 2024 - bithYear;
console.log('Привет, ' + userName + '! ' + 'Тебе ' + userAge  + ' лет.');//конкатенация строк
console.log(`Привет, ${userName}! Вам ${userAge} лет.`);//интерполяция строк
document.write(`<p>Привет, ${userName}! Вам ${userAge} лет.</p>`);

const date = new Date();
console.log(date.getFullYear());
document.write(`<p>Сегодня ${date.getFullYear()} год.</p>`);
