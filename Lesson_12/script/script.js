console.log(`its works`);

function sayHi (name){
    console.log(`Hallo, ${name}! Wir geht's?`);
}

function evenOrOdd(number) {
   if (number % 2 === 0){
    return true;
   } else {
    return false;
   }
}
function summ(num1, num2) {
    return num1 + num2;
}

function max(num1, num2) {
    if (num1 > num2){
        return `${num1} is bigger than ${num2}`;
    } else if(num1 < num2) {
        return `${num2} is bigger than ${num1}`;
    } else {
        return `Numbers are equal.`;
    }
}

function power(a, b) {
    return ((a**2 + b**2)**0.5)
}

function createArray (num) {
    let array = [];
    for (let i = 0; i <= num; i++) {
        array.push(i);
    }
    return array;
}

sayHi(`Natalia`);
const numberUser1 = prompt (`Enter a number:`) ;
const numberUser2 = prompt (`Enter a second number:`);
document.write(`<p>Задача Описать функцию, которая получает число и возвращает true, если число четное и false в ином случае.</p>`);
document.write (`<p> Введенные числа: ${numberUser1}, ${numberUser2}`);

document.write(`<p>First number is even? ${evenOrOdd(numberUser1)}</p>`);
document.write(`<p>Second number is even? ${evenOrOdd(numberUser2)}</p>`);
document.write(`<p>Задача. Создать функцию, считает сумму чисел.</p>`);
const summUser = summ(4,5);
document.write (`${numberUser1} + ${numberUser2} = ${summUser}`);

document.write(`<p>Задача. Создать функцию, которая в качестве аргументов получает два числа и выводит наибольшее.</p>`);

document.write(max (numberUser1, numberUser2));

document.write (`<p> Если катет равен 3, а катет 4, гипотенуза равна: ${power (3, 4)}</p>`);
document.write(`<p>Задача. Описать функцию, которая получает в качестве аргумента число и возвращает массив из чисел от 0 до указанного числа.</p>`);

const userArray = createArray(6);

document.write(userArray);

let car = {
    color: 'red',
    door: 5,
    startEng: function start (){
        return (`Завести двигатель`);
    }
}

console.log(car.startEng());
 