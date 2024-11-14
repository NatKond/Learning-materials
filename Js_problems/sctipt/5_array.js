document.write(`<p>1) Сделай функцию, которая принимает массив любых целых чисел, которая возращает истинну, если все элементы четные, если бы хотя бы один элемент не четный, то false.</p>`);

const length = Number(prompt(`Введите длину массива:`));
const arrayUser = [];
for (let i = 0; i < length; i++) {
    arrayUser.push(Number(prompt(`Введите ${i}-ое число массива`)));
}

function strArray(array) {
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


document.write(`<p> Введенный массив: ${strArray(arrayUser)}</p>`)

function isArrayEven (array) {
    let isEven = true;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 1){isEven=false;}
    }
    return isEven;
}

document.write(`<p>Все ли элементы массива четные? ${isArrayEven(arrayUser)}</p>`);

document.write(`<p>2) Сделай функцию, которая принимает массив любых целых чисел, которая возращает истинну, если хотя бы один элемент нечетный, если все четные, то false.</p>`);
function isArrayOdd (array) {
    let isOneOdd = false;
    for (let i = 0; i < array.length && !(isOneOdd); i++) {
        if (array[i] % 2 === 1){isOneOdd=true;}
    }
    return isOneOdd;
}

document.write(`<p>Если ли хотя бы один нечетный элемент? ${isArrayOdd(arrayUser)}</p>`);

document.write(`<p>3) Сделай функцию, которая принимает массив любых целых чисел, которая возращает новый массив, где все элементы кратны пяти.</p> 
<p>пример ([1,2,5,12,15,21] вернет [5,15])</p>`);

function multFive(array) {
const multFiveArray = [];
    for (let i = 0; i < array.length; i++) {
       if (array[i] % 5 === 0) {
        multFiveArray.push(array[i]);
       }
    }
    return multFiveArray;
}
document.write(`<p>Числа кратные 5 из массива: ${strArray(multFive(arrayUser))}</p>`);
document.write(`<p>4) Написать функцию, которая принимает массив чисел, например [1,2,3,4,5] и функция возращает среднее арифметическое, (округлить результат до десятых)</p>`);

function average(array) {
    let avr = array[0];
    for (let i = 1; i < array.length; i++) {
        avr = avr + array[i];
    }
    return avr/array.length;
}

document.write(`<p>Среднее арифметическое всех чисел массива: ${Math.floor(average(arrayUser))}</p>`);
