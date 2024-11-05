
let string1 = 'Hello, '
let string2 = 'world'
console.log(string1 + string2); // конкатенация строк
document.write(string1 + string2);

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

// < - меньшне
// > - больше
// <= - меньше или равно
// >= - больше или равно
// = - присвоение
// == - нестрогое сравнение (без сравнения типов)
// === - строгое сравнение (сравнивает типы)
// != - неравно

let nummer1 = `dsfjsdlfkj`; //Number (5);
let nummer2 = 15; //Number (10);
let string3 = 5;

console.log(`Первое число больше второго ${nummer1>nummer2}`);
console.log(`Первое число меньше второго ${nummer1<nummer2}`);
console.log(`Первое число меньше или равно второму ${nummer1<=nummer2}`);
console.log(`Первое число больше или равно второму ${nummer1>=nummer2}`);
console.log(`Первое число нестрого равно второму ${nummer1==string3}`);
console.log(`Первое число нестрого равно второму ${nummer1===string3}`);

//Задача.  Написать программу, которая получает два числа и выводит наибольшее

if (nummer1 > nummer2) {
    console.log(`${nummer1} больше ${nummer2}`);
} else if (nummer1 < nummer2){
    console.log(`${nummer2} больше ${nummer1}`);
} else if ((typeof (nummer1) != Number) || (typeof (nummer2) != Number) ){
    console.log(`${nummer1} или ${nummer2} не число`);
}
else {
    console.log(`${nummer2} равно ${nummer1}`);
}

//Задача. Написать программу, которая считывает через prompt одно число и выводит одну из строк “число положительное”, “число отрицательное”, “число равно нулю"

const userNumber1 = Number (prompt (`Введите число:`));

if (userNumber1 > 0) {
    console.log(`Число положительное`);
} 
else if (userNumber1 < 0) {
    console.log(`Число отрицательное`);
}
else if (userNumber1 === 0){
    console.log(`Число равно нулю `);
}
else {
    console.log(`Число не является числом`)
}

const month = Number (prompt(`Введите номер месяца`));

if ((month <= 2 && month > 0) || (month === 12)){
    console.log(`Сейчас зима`);
} else if (month >= 3 && month <= 5){
    console.log(`Сейчас весна`);
} else if (month >= 6 && month <= 8){
    console.log(`Сейчас лето`);
} else if (month >= 9 && month <= 11){
    console.log(`Сейчас осень`);
} else {
    console.log(`Неправильно введен месяц`);
}