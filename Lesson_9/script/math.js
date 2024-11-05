// let num1 = 8;
// let num2 = 2;
let num1 = prompt ('Введите первое число');
let num2 = prompt ('Введите второе число');

//let summ = num1 + num2;
console.log(typeof(num1));
console.log(typeof(num2));

console.log('Сложение без преобразования ' + num1 + num2);
console.log('Сложение с преобразованием');
console.log(+num1 + Number(num2));

num1 = parseInt(num1);
num2 = parseInt(num2);

console.log(typeof(num1));
console.log(typeof(num2));

console.log('Сложение:');
console.log(num1 + num2);
console.log('Вычитание:');
console.log(num1 - num2);
console.log('Деление:');
console.log(num1 / num2);
console.log('Умножение:');
console.log(num1 * num2);
console.log('Возведение в степень:');
console.log(num1 ** num2);
console.log('Возвращение остатка:');
console.log(num1 % num2);
document.write(`<p>Сложение: ${num1 + num2}.</p>
    <p>Вычитание: ${num1 - num2}.</p>
    <p>Деление: ${num1 / num2}.</p>
    <p>Умножение: ${num1 * num2}.</p>
    <p>Возведение в степень: ${num1 ** num2}.</p>
    <p>Возвращение остатка: ${num1 % num2}.</p>`);

//Задача: Написать программу, которая считывает через prompt число и выводит в консоль ее квадрат
const number = 5; //prompt('Введите число:');
console.log(number ** 2);
 
//Задача: Разделить 20 конфет на 3 детей и узнать сколько останется папе.
const bonbons = 20;
const kids = 3;
const eachKidGets = Math.floor (bonbons/kids);
const dadGets = bonbons % kids;
console.log(`Each kid gets ${eachKidGets}, dad gets ${dadGets}`);
//document.write(`<p>Each kid gets ${eachKidGets}, dad gets ${dadGets}</p>`);
 
//window.location = `http://${0.1+0.2}.com`