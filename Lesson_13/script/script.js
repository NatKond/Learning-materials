function creatFunc(a, b) {
    return a + b
}
let res = creatFunc(5, 9); //в переменную передался результат выполнения функции
let res1 = creatFunc; // в переменную передалась сама функция
let newres = res1(45, 5); //в переменную передался результат выполнения функции
console.log(newres);
console.log(typeof res); 
console.log(typeof res1);
let newAlert = alert
newAlert('Я функция в переменной newAlert');

const summRes1 = summ1(5,6);

console.log(alert);
// function declaration
function summ1(a, b) {
    return a + b;
}

// function expresion
const summ2 = function (a, b) {
    return a + b;
}

// arrow function
const summ3 = (a, b) =>  a + b;
const summRes2 = summ2(5,6);
const summRes3 = summ3(5,6);

const strArray = function (array) {
    let strArray = `[`;
    for (let i = 0; i < array.length; i++) {
        if (i !== array.length - 1) {
            strArray = strArray + array[i] + ', ';
        } else{
            strArray = strArray + array[i] + ']';
        }
    }
    return strArray;
}

document.write(`<p><b>Задание:</b> Напишите функцию, которая в качестве аргументов получает два числа и возвращает массив чисел со значениями от меньшего числа к большему.</p>`);

const num1 = Number(prompt(`Введите первое число:`));
const num2 = Number(prompt(`Введите второе число:`));
function createArray(a, b) {
    let newArray = [];
    let start;
    let end;
    if (b - a > 0){
        start = a;
        end = b;

    }else {
        start = b;
        end = a;
    }
    for (let i = start; i < end + 1; i++) {
        newArray.push(i);
        }
    return newArray;
}

const myArray = createArray (num1, num2);

document.write(`<p>Получился массив: ${strArray(myArray)} </p>`);

document.write(`<p><b>Задание:</b> Создать функцию, которая переворачивает массив, то есть первый элмент становится последним, а последний первым.</p>`)
function reverse(array) {
    let newArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
        newArray.push(array[i]);
    }
    return newArray;
}

const myReverseArray = reverse (myArray);
document.write(`<p>Получился массив: ${strArray(myReverseArray)} </p>`);

document.write(`<p><b>Задание:</b> Напишите функцию, которая в качестве аргумента получает массив из чисел и возвращает объект со свойствами min, max, avg (average - среднеее арефмитическое значение) с соответствующими значениями по массиву</p>`)
function minMaxAvr(array) {
    let min = array[0];
    let max = array[0];
    let summ = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) {min = array[i];}
        else if (array[i] > max) {max = array[i];}
        summ = summ + array[i];
    }
    let avr = summ/array.length;

    let arrayInfo = {
        min,
        max,
        avr,
    }
    return arrayInfo;
}

const myArrayInfo = minMaxAvr(myArray);
const myReverseArrayInfo = minMaxAvr(myReverseArray);

document.write(`<p>Элемент массива с минимальным значением: ${myArrayInfo.min} </p>
    <p>Элемент массива с максимальным значением: ${myArrayInfo.max} </p>
    <p>Среднее арифметическое значение элементов массива: ${myArrayInfo.avr}</p>`)