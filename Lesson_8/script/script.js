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

let string = 'hello, '
// console.log(string);
let string2 = 'world'
console.log(string + string2);
// конкатенация

//console.log(prompt('Your name'));
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









