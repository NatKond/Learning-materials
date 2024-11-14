// Массивы
const arr =[56, 98, 4,[78, 98, 57] -5, -6, 0]
console.log(arr);

arr[3] = false;
console.log(arr);

arr.push(`milk`); //добавляет элемент в конец
arr.push(`bread`); // удаляет элемент в конце
console.log(arr);

arr.pop(); // удаляет элемень в конце
console.log(arr);

arr.unshift(`cola`) // добавляет в начале
arr.unshift(`apfelschorle`) 
console.log(arr);

arr.shift() //удаляет в начале
console.log(arr);

document.write(`<p>Задание: Написать программу, в которой объявлен массив с 5 числовыми элементами. Программа должна заполнить новый пустой массив квадратами чисел из первого массива.</p>`);
/*
let lengthArray =  Number(prompt('Введите количество элементов массива:'));
let arrayNumbers = [];
for (let i = 0; i < lengthArray; i++){
    arrayNumbers.push(prompt(`Введите ${i} элемент массива`));
}
*/
//let arrayNumbers = [78, -6, 90, 12, -45, -67, 6, -3];
let arrayNumbers = [2, -4, 6, -1, 4, -8, 6, -5];
let displayArrayNumbers = '[';
for (let i = 0; i < arrayNumbers.length; i++){
    if (i != arrayNumbers.length -1){
        displayArrayNumbers = displayArrayNumbers + arrayNumbers[i] + ', ';
    } else {displayArrayNumbers = displayArrayNumbers + arrayNumbers[i] + ']'}
}

document.write(`<p>Введеный массив: ${displayArrayNumbers}</p>`);

let arraySquares = [];
for (let i = 0; i < arrayNumbers.length; i++){
    arraySquares.push(arrayNumbers[i] ** 2);
    console.log(`i = ${i}. arrayNumbers[i] = ${arrayNumbers[i]}. arraySquares[i] = ${arraySquares[i]} `);
    document.write(`<p>i = ${i}. arrayNumbers[i] = ${arrayNumbers[i]}. arraySquares[i] = ${arraySquares[i]} </p>`);
}

console.log(arrayNumbers);
console.log(arraySquares);

document.write(`<p>Задача: Написать цикл, который выводит только положительные элементы массива</p>`)
let arrayPositiv = []
for (let i = 0; i < arrayNumbers.length; i++){
    if (arrayNumbers[i] > 0) {
        arrayPositiv.push(arrayNumbers[i]);
        console.log(`i = ${i}, arrayNumbers[i] = ${arrayNumbers[i]} `);
        document.write(`<p>i = ${i}, arrayNumbers[i] = ${arrayNumbers[i]} </p>`);
    }
}
document.write(`<p>Задача: Написать цикл, который выводит отдельно четные и нечетные элементы массива</p>`)

let arrayEven = [];
let arrayOdd = [];
for (let i = 0; i < arrayNumbers.length; i++){
    if (arrayNumbers[i] % 2 === 0){
        arrayEven.push(arrayNumbers[i]);
    }
    else {
        arrayOdd.push(arrayNumbers[i]);
    }
}

let displayArrayEven = '[';
for (let i = 0; i < arrayEven.length; i++){
    if (i != arrayEven.length -1){
        displayArrayEven = displayArrayEven + arrayEven[i] + ', ';
    } else {displayArrayEven = displayArrayEven + arrayEven[i] + ']'}
}

let displayArrayOdd = '[';
for (let i = 0; i < arrayOdd .length; i++){
    if (i != arrayOdd .length -1){
        displayArrayOdd = displayArrayOdd + arrayOdd[i] + ', ';
    } else {displayArrayOdd = displayArrayOdd + arrayOdd[i] + ']'}
}

document.write(`<p>Массив с четными числами: ${displayArrayEven}</p>`);

document.write(`<p>Массив с нечетными числами: ${displayArrayOdd}</p>`);

console.log(`Задача: Вывести только те значения массива, индекс которых кратен трем`);
document.write(`<p>Задача: Вывести только те значения массива, индекс которых кратен трем</p>`);
for (let i = 0; i < arrayNumbers.length; i = i + 3){
    console.log(arrayNumbers[i]);
    document.write(`<p>i = ${i}, arrayNumbers[i] = ${arrayNumbers[i]} </p>`)
}
console.log(`Задача: Вывести значения массива справа налево с шагом два`);
document.write(`<p>Задача: Вывести значения массива справа налево с шагом два</p>`);

for (let i = arrayNumbers.length - 1; i >= 0; i = i - 2){
    console.log(arrayNumbers[i]);
    document.write(`<p>i = ${i}, arrayNumbers[i] = ${arrayNumbers[i]} </p>`)
}

document.write(`<p>Задача: Найти сумму положительных чисел.</p>`);

let summArray = 0;
for (let i = 0; i < arrayNumbers.length; i = i + 3){
    if (arrayNumbers[i] > 0){
        summArray = summArray + arrayNumbers[i];
    }
}
document.write(`<p>Сумма: ${summArray}</p>`);

document.write(`<p>Задача: Найти сумму четных и нечетных чисел из массива и вывести разницу между ними. Вычесть из большего меньшее</p>`);
let summEven = 0;
let summOdd = 0;
for (let i = 0; i < arrayNumbers.length; i++){
    if (arrayNumbers[i] % 2 === 0){
        summEven = summEven + arrayNumbers[i];
    }
    else {
        summOdd = summOdd + arrayNumbers[i];
    }
}
document.write(`<p>Сумма четных чисел: ${summEven}</p>`);
document.write(`<p>Сумма нечетных чисел: ${summOdd}</p>`);

if (summEven > summOdd) {
    document.write(`<p>Разница: ${summEven - summOdd}</p>`);
} else if (summEven < summOdd) {
    document.write(`<p>Разница: ${summOdd - summEven}</p>`);
} else {
    document.write(`<p>Разница: ${summOdd - summEven}</p>`);
}