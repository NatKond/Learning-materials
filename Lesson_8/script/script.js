//alert('hello world')
//document.write('hello world');
//let hello='Hallo! Wie gets?';
//console.log(hello);

const plus = document.querySelector('button');
const result = document.querySelector('p');
let count = 0;

plus.addEventListener('click',function(){
    count = count +1;
    result.innerText = 'Значение счетчика '+ count;
    console.log(count);
})

document.write();

let string1 = 'hello, '
let string2 = 'world'
console.log(string1 + string2); // конкатенация строк


let num1 = 8;
let num2 = 2;
//console.log(prompt('Your name'));
//let num1 = prompt ('Введите первое число');
//let num2 = prompt ('Введите второе число');

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

const userName = 'Наталья'; //prompt ('Как вас зовут?');
const userAge = '36'; //prompt ('Сколько вам лет?');
console.log('Привет, ' + userName + '! ' + 'Тебе ' + userAge + ' лет.');

console.log(`Привет, ${userName}! Вам ${userAge} лет.`);//интерполяция строк

//Задача: есть переменные r, g, b с числовыми значениями. Вывести в консоль строку “rgb(12, 34, 14)” используя конкатенацию и интерполяци
let r = 12;
let g = 34;
let b = 14;
console.log('rgb (' + r + ', ' + g + ', ' + b + ')');
console.log(`rgb (${r}, ${g}, ${b})`);
//Задача: Написать программу, которая запрашивает у пользователя его возраст (в годах) и выводит, сколько ему лет.
let bithYear = 1985; //prompt ('Укажите ваш год рожденья'); 
let yourAge = `Привет! Вам ${2024 - bithYear} лет.`
console.log(yourAge);

const date = new Date();
console.log(date.getFullYear());

//Задача: Написать программу, которая считывает через prompt число и выводит в консоль ее квадрат
const number = 5; //prompt('Введите число:');
console.log(number ** 2);
 

const bonbons = 20;
const kids = 3;
const eachKidGets = Math.floor (bonbons/kids);
const dadGets = bonbons % kids;
console.log(`Each kid gets ${eachKidGets}, dad gets ${dadGets}`);
 
//window.location = `http://${0.1+0.2}.com`



