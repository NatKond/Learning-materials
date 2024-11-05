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

//let userArray = Array (prompt(`Введите слова через запятую`))

//Задание: Написать программу, в которой объявлен массив с 5 числовыми элементами. Программа должна заполнить новый пустой массив квадратами чисел из первого массива.
//Пример: 
//Исходный массив [1, 4, 2, 5, 3]
//Итоговый массив [1, 16, 4, 25, 9]

let arrayNumbers = [1, 4, 7, 5, 3];
let arraySquares = []

for (let i=0; i < arrayNumbers.length; i = i + 1){
    arraySquares.push(arrayNumbers[i] ** 2);
    console.log(`Номер элемента массива ${i}. Содержание элемента массива ${arrayNumbers[i]}. Содержание элемента массива с квадратами ${arraySquares[i]} `);
    document.write(`<p>Номер элемента массива ${i}. Содержание элемента массива ${arrayNumbers[i]}. Содержание элемента массива с квадратами ${arraySquares[i]} </p>`);
}

console.log(arrayNumbers);
console.log(arraySquares);

