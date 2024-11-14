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

console.log('a + b =');
console.log(num1 + num2);
console.log('a - b =');
console.log(num1 - num2);
console.log('a/b = ');
console.log(num1 / num2);
console.log('a * b = ');
console.log(num1 * num2);
console.log('a**2');
console.log(num1 ** num2);
console.log('a % b');
console.log(num1 % num2);
document.write(`
    <p>Первое число: a = ${num1}. Второе число: b = ${num2}.</p>
    <p>Сложение: a + b = ${num1 + num2}.</p>
    <p>Вычитание: a - b = ${num1 - num2}.</p>
    <p>Деление: a/b = ${num1 / num2}.</p>
    <p>Умножение: a * b =  ${num1 * num2}.</p>
    <p>Возведение в степень: a**2 = ${num1 ** num2}.</p>
    <p>Возвращение остатка: a % b = ${num1 % num2}.</p>`);
document.write(`<p>Задача: Написать программу, которая считывает через prompt число и выводит в консоль ее квадрат</p>`);
document.write(`<p>Квадрат первого числа: ${num1 ** 2}</p>`);
document.write(`<p>Квадрат второшл числа: ${num2 ** 2}</p>`);
document.write(`<p>Задача: Разделить 20 конфет на 3 детей и узнать сколько останется папе.</p>`)
const bonbons = 20;
const kids = 3;
const eachKidGets = Math.floor (bonbons/kids);
const dadGets = bonbons % kids;
document.write(`<p>Каждый ребенок получит ${eachKidGets}, папе останется ${dadGets}</p>`);
 
//window.location = `http://${0.1+0.2}.com`