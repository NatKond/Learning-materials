/*
let firstName = prompt(`Как вас зовут:`);
let lastName = prompt (`Какая у вас фамилия:`);
let age = Number (prompt(`Сколько вам лет?`));

console.log(`Привет! Меня зовут ${firstName} ${lastName}. Мне ${age} лет.`);
*/
// Задание : Написать программу, которая считывает два числа (объявляем две переменные и записываем туда результат работы двух вызовов prompt) и выводит их разницу, сумму и произведение 
// (“Разность чисел a и b равна sub, сумма чисел a и b равна sum, произведение чисел a и b равно mult”)

let numberUser1 = Number(prompt(`Enter first number`));
let numberUser2 = Number(prompt(`Enter second number`));
let sum = numberUser1 + numberUser2;
let sub = numberUser1 - numberUser2;
let mult = numberUser1 * numberUser2;
document.write (`<p>Введенные числа: a = ${numberUser1}, b = ${numberUser2}</p>`);

document.write (`<p>a + b = ${sum}</p>`);
document.write (`<p>a - b = ${sub}</p>`);
document.write (`<p>a * b = ${mult}</p>`);

// String - "" '' ``
// Number - 12, -34, 2.5, NaN, -Infinity, Infinity
// Boolean - True False
// Object - Array, Object, Function, NodeList, DOMTokenLis
// console.log(12/0); Infinity
// console.log(-12/0); -Infinity

let a = 95;
let b = 60;
let d = 7;


if(a + b - d * 18 - 100){
    console.log('Yes');
}
else{
    console.log('No');
}
// true = [1; infinity] & [-infinty; -1] 
// false = 0, ''
// true = [1; infinity] & [-infinty; -1], 'string'
// false = 0, '', undefined, null, NaN
// and && - *
// or || - +
// if(10>1 && (12>15 || 100>10)){
//     console.log('yes');
// }
// else{
//     console.log('no');
// }

let fruits = [`apple`, `banana`, `pineapple`];
console.log(fruits);
console.log(fruits.indexOf(`banana`));

fruits[fruits.indexOf(`banana`)] = `grapes`;
console.log(fruits);
fruits[fruits.indexOf(`apple`)] = `pear`;
console.log(fruits);
 
let numbers =[2, 6, -2, 0, 10, 5, 28, 0, -56, 3, 98, 25];
console.log(numbers);

let strNumbers = `[`;
for(let i = 0; i < numbers.length; i++){
    if (i !== numbers.length - 1){
        strNumbers = strNumbers + numbers[i] + ', ';
    }
    else {
        strNumbers = strNumbers + numbers[i] + ']';
    }
    console.log(numbers[i]);    
}

document.write(`<p>Задан массив: numbers = ${strNumbers}</p>`);
//document.write(`<p>numbers = [${numbers.map(n => n*2).join(`, `)}]</p>`);
//document.write(numbers);
// 1 itr. i = 0; 0 < 12; 0++
// numbers[0]
// 2 itr. i = 1; 1 < 12; 1++
// numbers[1]
// ....
// 12 itr. i = 11; 11 < 12; 11++
// numbers[11]
// 13 itr. i = 12; 12 < 12
// Выход из цикла

document.write(`<p>Вывести из массива numbers все четные числа.</p>`);

let numbersEven = [];
let numbersOdd = [];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i]%2 === 0){
        numbersEven.push(numbers[i]);
    }
    else{
        numbersOdd.push(numbers[i]);
    }

}
console.log(numbersEven);
console.log(numbersOdd);

let strNumbersEven = '[';
for (let i = 0; i < numbersEven.length; i++) {
    if (i !== numbersEven.length - 1){
        strNumbersEven = strNumbersEven + numbersEven[i] + ' ';
    }
    else {
        strNumbersEven = strNumbersEven + numbersEven[i] + ']';
    }
}

document.write(`<p>numbersEven = ${strNumbersEven}</p>`)
document.write(`<p>Вывести только те значения массива, индекс которых кратен трем</p>`);
let numbersThree =[];
for (let i = 3; i < numbers.length; i +=3) {
    numbersThree.push(numbers[i]);
}
console.log(numbersThree);

let strNumbersThree = '[';
for (let i = 0; i < numbersThree.length; i++) {
    if (i !== numbersThree.length - 1){
        strNumbersThree = strNumbersThree + numbersThree[i] + ' ';
    }
    else {
        strNumbersThree = strNumbersThree + numbersThree[i] + ']';
    }
}

document.write(`<p>numbers = ${strNumbersThree}</p>`)

document.write(`<p>Вывести все двузначные положительные числа, делящиеся без остатка на 3 и на 5</p>`);
for (num = 10; num < 100; num++){
    if (!(num%3 && num%5)){
        document.write(`${num} `)
    }
}